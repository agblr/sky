package org.takeback.util.task.schedule;

import org.quartz.Scheduler;
import org.springframework.beans.factory.annotation.Autowired;

public class ScheduleExecutor {
	@Autowired
	private static Scheduler scheduler;

/*
	private JobDetail processJob(Task job){
		JobDetail jobDetail = JobBuilder.newJob();
		jobDetail.setJobClass(job.getClass());
		jobDetail.setName(job.getName());
		return jobDetail;
	}
	
	public void schedule(Task job, String cronExpression){
		try {
			schedule(job, new CronExpression(cronExpression));
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void schedule(Task job, CronExpression cronExpression){
		JobDetail jobDetail = processJob(job);
		try {
			scheduler.addJob(jobDetail, true);
			CronTrigger cronTrigger = new CronTrigger(jobDetail.getName(), Scheduler.DEFAULT_GROUP, jobDetail.getName(), Scheduler.DEFAULT_GROUP);
			cronTrigger.setCronExpression(cronExpression);
			scheduler.scheduleJob(cronTrigger);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void schedule(Task job, Date startTime) {
		schedule(job, startTime, null);
	}

	public void schedule(Task job, Date startTime, Date endTime) {
		schedule(job, startTime, endTime, 0, 0L);
	}

	public void schedule(Task job, Date startTime, Date endTime, int repeatCount) {
		schedule(null, startTime, endTime, repeatCount, 0L);
	}

	public void schedule(Task job, Date startTime, Date endTime, long repeatInterval) {
		schedule(job, startTime, endTime, 0, repeatInterval);
	}
	
	public void schedule(Task job, Date startTime, Date endTime, int repeatCount, long repeatInterval) {
		JobDetail jobDetail = processJob(job);
		try {
			scheduler.addJob(jobDetail, true);
			SimpleTrigger simpleTrigger = new SimpleTrigger(jobDetail.getName(), Scheduler.DEFAULT_GROUP, jobDetail.getName(), Scheduler.DEFAULT_GROUP, startTime, endTime, repeatCount, repeatInterval);
			scheduler.scheduleJob(simpleTrigger);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void pauseAll(){
		try {
			scheduler.pauseAll();
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void resumeAll(){
		try {
			scheduler.resumeAll();
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void resume(String name){
		try {
			scheduler.resumeJob(name, Scheduler.DEFAULT_GROUP);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void pause(String name){
		try {
			scheduler.pauseJob(name, Scheduler.DEFAULT_GROUP);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void pause(String name, boolean delete){
		try {
			scheduler.pauseJob(name, Scheduler.DEFAULT_GROUP);
			if(delete){
				delete(name);
			}
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(String name){
		try {
			scheduler.deleteJob(name, Scheduler.DEFAULT_GROUP);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public JobDetail getJobDetail(String name){
		try {
			return scheduler.getJobDetail(name, Scheduler.DEFAULT_GROUP);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public Trigger getTrigger(String name){
		try {
			return scheduler.getTrigger(name, Scheduler.DEFAULT_GROUP);
		} catch (SchedulerException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void setCronExpression(String name, String cronExpression){
		try {
			CronTrigger cronTrigger = (CronTrigger) getTrigger(name);
			cronTrigger.setCronExpression(cronExpression);
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	}
	*/

}
