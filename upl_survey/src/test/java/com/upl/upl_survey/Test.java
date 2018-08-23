package com.upl.upl_survey;

import java.util.Date;

public class Test {
	
	@org.junit.Test
	public void sample() {
		final long EXPIRATION_TIME = 864_000_000;
		Date d = new Date(System.currentTimeMillis()+ EXPIRATION_TIME);
		System.out.println("Date :"+d);
	}

}
