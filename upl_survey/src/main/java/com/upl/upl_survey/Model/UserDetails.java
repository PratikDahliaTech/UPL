package com.upl.upl_survey.Model;

import java.sql.Timestamp;
import java.util.Date;

public class UserDetails {

	private int id;
	private String password;
	private String created_by;
	private String updated_by;
	private Timestamp created_date;
	private Timestamp updated_date;
	private String email;
	private boolean is_deleted;
	private int user_master_id;
	private String type;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCreated_by() {
		return created_by;
	}

	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}

	public String getUpdated_by() {
		return updated_by;
	}

	public void setUpdated_by(String updated_by) {
		this.updated_by = updated_by;
	}

	public Date getCreated_date() {
		return created_date;
	}

	public void setCreated_date(Timestamp created_date) {
		this.created_date = created_date;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Timestamp updated_date) {
		this.updated_date = updated_date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getUser_master_id() {
		return user_master_id;
	}

	public void setUser_master_id(int user_master_id) {
		this.user_master_id = user_master_id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isIs_deleted() {
		return is_deleted;
	}

	public void setIs_deleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserDetails [id=");
		builder.append(id);
		builder.append(", password=");
		builder.append(password);
		builder.append(", created_by=");
		builder.append(created_by);
		builder.append(", updated_by=");
		builder.append(updated_by);
		builder.append(", created_date=");
		builder.append(created_date);
		builder.append(", updated_date=");
		builder.append(updated_date);
		builder.append(", email=");
		builder.append(email);
		builder.append(", is_deleted=");
		builder.append(is_deleted);
		builder.append(", user_master_id=");
		builder.append(user_master_id);
		builder.append(", type=");
		builder.append(type);
		builder.append("]");
		return builder.toString();
	}
}
