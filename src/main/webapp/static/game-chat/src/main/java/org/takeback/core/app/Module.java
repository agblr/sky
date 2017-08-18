package org.takeback.core.app;

import org.takeback.util.converter.ConversionUtils;

import java.util.List;

public class Module extends ApplicationNode {
	private static final long serialVersionUID = -5866496056614584396L;
	private String script;
	private String implement;
	private Boolean runAsWindow;

	public List<Action> getActions() {
		if (deep >= getRequestDeep()) {
			return null;
		}
		return super.getItems();
	}

	public String getScript() {
		return script;
	}

	public void setScript(String script) {
		this.script = script;
	}

	public <T> T getProperty(String nm, Class<T> targetType) {
		return ConversionUtils.convert(getProperty(nm), targetType);
	}

	public String getImplement() {
		return implement;
	}

	public void setImplement(String implement) {
		this.implement = implement;
	}

	public Boolean isRunAsWindow() {
		return runAsWindow;
	}

	public void setRunAsWindow(boolean runAsWindow) {
		this.runAsWindow = runAsWindow;
	}
}
