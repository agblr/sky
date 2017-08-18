package org.takeback.core.app;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.apache.commons.lang3.StringUtils;
import org.takeback.util.JSONUtils;
import org.takeback.util.context.Context;
import org.takeback.util.context.ContextUtils;

import java.io.Serializable;
import java.util.*;

public abstract class ApplicationNode implements Serializable {
	private static final long serialVersionUID = 5829201367508285016L;
	public static final String MAIN_TYPE = "1";
	public static final String SIGN = "/";
	protected ApplicationNode parent;
	protected Map<String, ApplicationNode> items = new LinkedHashMap<>();

	protected String id;
	protected String name;
	protected String iconCls;
	protected int deep;
	private String type;
	private String ref;
	private Map<String, Object> properties;

	public  <T extends ApplicationNode> List<T> getItems(){
		List<T> ls = new ArrayList<>();
		Collection<ApplicationNode> c = items.values();
		for (ApplicationNode item : c) {
			if (MAIN_TYPE.equals(item.getType())) {
				continue;
			}
			ls.add((T) item);
		}
		return ls;
	}

	public void appendChild(ApplicationNode item) {
		item.setParent(this);
		items.put(item.getId(), item);
	}

	public ApplicationNode getChild(String id) {
		return items.get(id);
	}

	@JsonIgnore
	public Map<String, ApplicationNode> items() {
		return Collections.unmodifiableMap(items);
	}

	public void clearItems() {
		items.clear();
	}

	protected int getRequestDeep() {
		if (ContextUtils.hasKey(Context.REQUEST_APPNODE_DEEP)) {
			return (Integer) ContextUtils.get(Context.REQUEST_APPNODE_DEEP);
		}
		return Integer.MAX_VALUE;
	}

	protected String[] getNodePath() {
		int size = deep + 1;
		String[] paths = new String[size];
		ApplicationNode item = this;
		while (item != null) {
			paths[item.deep()] = item.getId();
			item = item.getParent();
		}
		return paths;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String icon) {
		this.iconCls = icon;
	}

	@JsonIgnore
	protected ApplicationNode getParent() {
		return parent;
	}

	public int deep() {
		return deep;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRef() {
		return ref;
	}

	public void setRef(String ref) {
		this.ref = ref;
	}

	public void setParent(ApplicationNode parent) {
		if (this.parent != null) {
			return;
		}
		this.parent = parent;
		deep = parent.deep() + 1;
	}

	public int hashCode() {
		return deep * 31 + id.hashCode();
	}

	public void setProperty(String nm, Object v) {
		if (properties == null) {
			properties = new HashMap<>();
		}
		properties.put(nm, v);
	}

	public Object getProperty(String nm) {
		if (properties == null) {
			return null;
		}
		String s = (String) properties.get(nm);
		if (StringUtils.isEmpty(s)) {
			return null;
		}
		Object v = null;
		switch (s.charAt(0)) {
		case '%':
			v = ContextUtils.get(s.substring(1));
			break;
		case '[':
			v = JSONUtils.parse(s, List.class);
			break;
		case '{':
			v = JSONUtils.parse(s, HashMap.class);
			break;
		default:
			v = s;
			break;
		}
		return v;
	}

	public void setProperties(Map<String, Object> ps){
		properties = ps;
	}

	public Map<String, Object> getProperties() {
		if (properties == null || properties.size() == 0) {
			return null;
		}
		return properties;
	}

	public String getFullId() {
		if (parent != null) {
			return parent.getFullId() + SIGN + id;
		}
		return id;

	}
	public boolean hasRef() {
		return !StringUtils.isEmpty(ref);
	}
}
