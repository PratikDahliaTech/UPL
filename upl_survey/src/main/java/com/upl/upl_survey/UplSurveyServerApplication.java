package com.upl.upl_survey;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.upl.upl_survey.Dao")
public class UplSurveyServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UplSurveyServerApplication.class, args);
	}
}
