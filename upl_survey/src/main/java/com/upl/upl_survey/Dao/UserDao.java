package com.upl.upl_survey.Dao;

import java.io.InputStream;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.upl.upl_survey.Model.FormMaster;
import com.upl.upl_survey.Model.UserDetails;

public interface UserDao {
	UserDetails getLoginUser(@Param("email") String email);

	String getUserPassword(@Param("email") String email);

	void addUser(@Param("password") String password, @Param("created_by") Long created_by,
			@Param("updated_by") Long updated_by, @Param("created_date") Date created_date,
			@Param("updated_date") Date updated_date, @Param("phone_no") Number phone_No, @Param("email") String email,
			@Param("user_master_id") Long user_master_id);

	void updateUserDetails(@Param("password") String password, @Param("updated_by") Long updated_by,
			@Param("updated_date") Date updated_date, @Param("phone_no") Number phone_No, @Param("email") String email,
			@Param("user_master_id") Long user_master_id);

	void deleteUserDetails(@Param("id") Long id);

	List<UserDetails> getAllUserDetails();

	void createForm(@Param("form_id") String form_id, @Param("created_by") Long created_by,
			@Param("last_updated_by") Long last_updated_by, @Param("created_date") Date created_date,
			@Param("updated_date") Date updated_date, @Param("language_id") String language_id);

	void insertFormDetails(@Param("form_detail") InputStream form_detail, @Param("date") Date date,
			@Param("form_master_id") Long id, @Param("updated_by") Long updated_by);

	Long getFormId(@Param("form_id") String form_id);

	void deleteForm(@Param("id") Long id);

	void updateForm(@Param("id") Long id, @Param("form_id") String form_id,
			@Param("last_updated_by") Long last_updated_by, @Param("updated_date") Date updated_date);

	List<FormMaster> getAllForms();
}
