package org.takeback.util.kvstore;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public interface KVStore {
	
	void start();
	
	void close();
	
	void put(String k, String v);
	
	void put(byte[] k, byte[] v);
	
	String get(String k);
	
	byte[] get(byte[] k);
	
	Entry<byte[], byte[]> seekFirst();
	
	void remove(String k);
	
	void remove(byte[] k);
	
	void removes(List<String> ks);
	
	void removesByByte(List<byte[]> ks);
	
	void puts(Map<String, String> kv);
	
	void putsByByte(Map<byte[], byte[]> kv);
	
	Map<String, String> gets();
	
	Map<byte[], byte[]> getsByByte();

	boolean containsKey(String k);

	boolean containsKey(byte[] k);
	
}
