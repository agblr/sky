package org.takeback.core.app;

import org.apache.commons.lang3.StringUtils;
import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;
import org.springframework.core.io.Resource;
import org.springframework.util.ResourceUtils;
import org.takeback.core.controller.support.AbstractConfigurableLoader;
import org.takeback.core.resource.ResourceCenter;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.xml.XMLHelper;

import java.util.List;

public class ApplicationLocalLoader extends AbstractConfigurableLoader<Application> {

	public ApplicationLocalLoader() {
		postfix = ".app";
	}

	@Override
	public Application createInstanceFormDoc(String id, Document doc, long lastModi) {
		Element root = doc.getRootElement();
		if (root == null) {
			return null;
		}
		try {
			Application app = ConversionUtils.convert(root, Application.class);
			app.setId(id);
			app.setLastModify(lastModi);

			setupProperties(app, root);
			parseChilds(app, root);
			return app;
		} catch (Exception e) {
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	private void parseChilds(ApplicationNode appNode, Element el) {
		List<Element> ls = (List<Element>) el.elements("catagory");
		for (Element catEl : ls) {
			String ref = catEl.attributeValue("ref", "");
			if (!StringUtils.isEmpty(ref)) {
				catEl = loadRefNode(ref, catEl);
			}
			Category category = ConversionUtils.convert(catEl, Category.class);
			appNode.appendChild(category);
			setupProperties(category, catEl);
			parseRefNode(category);
			parseChilds(category, catEl);
		}

		ls = (List<Element>) el.elements("module");
		for (Element modEl : ls) {
			String ref = modEl.attributeValue("ref", "");
			if (!StringUtils.isEmpty(ref)) {
				modEl = loadRefNode(ref, modEl);
			}
			Module mod = ConversionUtils.convert(modEl, Module.class);
			appNode.appendChild(mod);
			setupProperties(mod, modEl);
			parseRefNode(mod);
			parseChilds(mod, modEl);
		}

		ls = (List<Element>) el.elements("action");
		for (Element actEl : ls) {
			Action action = ConversionUtils.convert(actEl, Action.class);
			appNode.appendChild(action);
		}

	}

	private void parseRefNode(ApplicationNode node) {
		ApplicationNode it = node.getParent();
		if (it != null) {
			if (it.hasRef() && !node.hasRef()) {
				node.setRef(it.getRef() + ApplicationNode.SIGN + node.getId());
			}
			if (node.hasRef()) {
				while (it.getParent() != null) {
					it = it.getParent();
				}
				((Application) it).addRefItem(node);
			}
		}
	}

	@SuppressWarnings("unchecked")
	private Element loadRefNode(String ref, Element el) {
		Element node = null;
		if (StringUtils.isEmpty(ref)) {
			return null;
		}
		String[] nodes = ref.split(ApplicationNode.SIGN);
		if (nodes.length > 1) {
			String path = nodes[0].replaceAll("\\.", "/") + postfix;
			try {
				Resource r = ResourceCenter.load(ResourceUtils.CLASSPATH_URL_PREFIX, path);
				Document doc = XMLHelper.getDocument(r.getInputStream());
				node = doc.getRootElement();
				for (int i = 1; i < nodes.length; i++) {
					node = (Element) node.selectSingleNode("*[@id='" + nodes[i] + "']");
					if (node == null) {
						break;
					}
				}
			} catch (Exception e) {
				return null;
			}
		}
		if (node == null) {
			return null;
		}
		for (Attribute att : (List<Attribute>) el.attributes()) {
			node.addAttribute(att.getName(), att.getValue());
		}
		return node;
	}

	@SuppressWarnings("unchecked")
	private void setupProperties(ApplicationNode o, Element el) {
		List<Element> ls = el.selectNodes("properties/p");
		for (Element p : ls) {
			o.setProperty(p.attributeValue("name"), p.getTextTrim());
		}
	}
}
