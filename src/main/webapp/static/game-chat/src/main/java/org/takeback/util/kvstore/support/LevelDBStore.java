package org.takeback.util.kvstore.support;

import org.iq80.leveldb.*;
import org.takeback.util.kvstore.KVStore;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static org.iq80.leveldb.impl.Iq80DBFactory.*;

public class LevelDBStore implements KVStore {
	private String name = getClass().getSimpleName();
	private Options options;
	private File databaseDir;
	private DB db;
	private final Lock connectingLock = new ReentrantLock();
	private AtomicBoolean initedStatus = new AtomicBoolean(false);
//	private CountDownLatch connectLatch;

	public LevelDBStore(String name){
		this.name = name;
//		connectLatch = new CountDownLatch(1);
	}

	public String getName() {
		return name;
	}

	@Override
	public void start() {
		connectingLock.lock();
		try {
			if(!initedStatus.get()){
				databaseDir = new File(System.getProperty("user.home") + File.separator + "leveldb" + File.separator + name);
				options = new Options().createIfMissing(true).compressionType(CompressionType.NONE);
				db = factory.open(databaseDir, options);
				initedStatus.set(true);
			}
		} catch (IOException e) {
			throw new IllegalStateException("init db error.", e);
		} finally{
			connectingLock.unlock();
		}
	}
	
	public DB db(){
		return db;
	}

	@Override
	public void close() {
		try {
			if(db != null){
				db.close();
				initedStatus.set(false);
			}
		} catch (IOException e) {
			throw new IllegalStateException("close db error.", e);
		}
	}
	
	private void checkStatus(){
		if(!initedStatus.get()){
			throw new IllegalStateException("Need to start the store at first.");
		}
	}

	@Override
	public void put(String k, String v) {
		checkStatus();
		db.put(bytes(k), bytes(v));
	}
	
	@Override
	public void put(byte[] k, byte[] v) {
		checkStatus();
		db.put(k, v);
	}

	@Override
	public String get(String k) {
		checkStatus();
		return asString(db.get(bytes(k)));
	}
	
	@Override
	public byte[] get(byte[] k) {
		checkStatus();
		return db.get(k);
	}
	
	@Override
	public Entry<byte[], byte[]> seekFirst(){
		checkStatus();
		ReadOptions ro = new ReadOptions();
		DBIterator it = db.iterator(ro);
		it.seekToFirst();
		if(it.hasNext()){
			Entry<byte[], byte[]> e = it.peekNext();
			return e;
		}
		return null;
	}
	
	@Override
	public void remove(String k) {
		checkStatus();
		db.delete(bytes(k));
	}
	
	@Override
	public void remove(byte[] k) {
		checkStatus();
		db.delete(k);
	}
	
	@Override
	public void removes(List<String> ks) {
		checkStatus();
		WriteBatch batch = null;
		try {
			batch = db.createWriteBatch();
			for (String k : ks) {
				batch.delete(bytes(k));
			}
			db.write(batch);
		} finally {
			try {
				if(batch != null)
					batch.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close batch.", e);
			}
		}
	}
	
	@Override
	public void removesByByte(List<byte[]> ks) {
		checkStatus();
		WriteBatch batch = null;
		try {
			batch = db.createWriteBatch();
			for (byte[] k : ks) {
				batch.delete(k);
			}
			db.write(batch);
		} finally {
			try {
				if(batch != null)
					batch.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close batch.", e);
			}
		}
	}

	@Override
	public void puts(Map<String, String> kv) {
		checkStatus();
		WriteBatch batch = null;
		try {
			batch = db.createWriteBatch();
			for (String k : kv.keySet()) {
				String v = kv.get(k);
				batch.put(bytes(k), bytes(v));
			}
			db.write(batch);
		} finally {
			try {
				if(batch != null)
					batch.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close batch.", e);
			}
		}
	}
	
	@Override
	public void putsByByte(Map<byte[], byte[]> kv) {
		checkStatus();
		WriteBatch batch = null;
		try {
			batch = db.createWriteBatch();
			for (byte[] k : kv.keySet()) {
				byte[] v = kv.get(k);
				batch.put(k, v);
			}
			db.write(batch);
		} finally {
			try {
				if(batch != null)
					batch.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close batch.", e);
			}
		}
	}

	@Override
	public Map<String, String> gets() {
		checkStatus();
		DBIterator iterator = null;
		try {
			iterator = db.iterator();
			Map<String, String> map = new HashMap<>();
			for (iterator.seekToFirst(); iterator.hasNext(); iterator.next()) {
				Entry<byte[], byte[]> e = iterator.peekNext();
				map.put(asString(e.getKey()), asString(e.getValue()));
			}
			return map;
		} finally {
			try {
				if(iterator != null)
					iterator.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close iterator.", e);
			}
		}
	}

	@Override
	public Map<byte[], byte[]> getsByByte() {
		checkStatus();
		DBIterator iterator = null;
		try {
			iterator = db.iterator();
			Map<byte[], byte[]> map = new HashMap<>();
			for (iterator.seekToFirst(); iterator.hasNext(); iterator.next()) {
				Entry<byte[], byte[]> e = iterator.peekNext();
				map.put(e.getKey(), e.getValue());
			}
			return map;
		} finally {
			try {
				if(iterator != null)
					iterator.close();
			} catch (IOException e) {
				throw new IllegalStateException("Error occurs when close iterator.", e);
			}
		}
	}

	@Override
	public boolean containsKey(String k) {
		return containsKey(bytes(k));
	}

	@Override
	public boolean containsKey(byte[] k) {
		checkStatus();
		return db.get(k) != null;
	}

}
