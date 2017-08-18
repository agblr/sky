package org.takeback.util.thread;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class ThreadUtil {

	private static final int DEFAULT_SIZE = 50;
	private static final int DEFAULT_MAX_SIZE = 150;
	private static ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
			DEFAULT_SIZE,   //核心池大小
			DEFAULT_MAX_SIZE,   //最大
			5, TimeUnit.SECONDS,    //回收空闲时间
			new ArrayBlockingQueue<Runnable>(5),    //缓冲池
			new ThreadPoolExecutor.AbortPolicy());  //拒绝策略

	public static void execute(Runnable task){
		threadPoolExecutor.execute(task);
	}
	
}
