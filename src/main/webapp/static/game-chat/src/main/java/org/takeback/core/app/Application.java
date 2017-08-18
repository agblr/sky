package org.takeback.core.app;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.takeback.core.controller.Configurable;
import org.takeback.util.converter.ConversionUtils;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Application extends ApplicationNode implements Configurable {
	private static final long serialVersionUID = 3549131476086910545L;
	protected Long lastModi;
	private Integer pageCount;
	private Map<String, String> refMap = new HashMap<>();

	public List<ApplicationNode> getItems() {
		if (deep >= getRequestDeep()) {
			return null;
		}
		return super.getItems();
	}

	@Override
	public <T> T getProperty(String nm, Class<T> targetType) {
		return ConversionUtils.convert(getProperty(nm), targetType);
	}

	@Override
	public Long getlastModify() {
		return lastModi;
	}

	@Override
	public void setLastModify(Long lastModi) {
		this.lastModi = lastModi;
	}

	public Integer getPageCount() {
		if (pageCount == null) {
			return 0;
		}
		return pageCount;
	}

	public void setPageCount(Integer pageCount) {
		this.pageCount = pageCount;
	}

	@JsonIgnore
	public Map<String, String> getRefItems() {
		return Collections.unmodifiableMap(refMap);
	}

	public void addRefItem(ApplicationNode node) {
		refMap.put(node.getRef(), node.getFullId());
	}

}
