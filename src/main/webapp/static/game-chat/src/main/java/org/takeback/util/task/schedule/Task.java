package org.takeback.util.task.schedule;

import org.joda.time.DateTime;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class Task implements Job{

	public Task(){

	}

	@Override
	public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
		System.out.println(new DateTime().toLocalDateTime());
	}

}
