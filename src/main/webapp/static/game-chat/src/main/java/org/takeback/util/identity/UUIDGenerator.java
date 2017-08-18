package org.takeback.util.identity;

import java.util.UUID;

public class UUIDGenerator {
	
	public static String get(){
		String uuid = UUID.randomUUID().toString();
		return uuid.replace("-", "");
	}
	
	public static String[] gets(int length){
		String[] uuids = new String[length];
		for(int i=0;i<length;i++){
			uuids[i] = get();
		}
		return uuids;
	}
	
	public static void main(String[] args) {
		System.out.println(gets(3)[0]);
		System.out.println(gets(3)[1]);
		System.out.println(gets(3)[2]);
	}

}
