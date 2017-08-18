package org.takeback.core.controller;

public interface ConfigurableLoader<T extends Configurable> {
	public T load(String id);
}
