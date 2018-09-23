package com.upl.upl_survey.Model;

import java.sql.Timestamp;
import java.util.List;

public class FormMaster {

	private int id;
	private String form_id;
	private boolean is_deleted = false;
	private Timestamp created_date;
	private Timestamp updated_date;
	private int created_by;
	private int last_updated_by;
	private int language_id;

	private List<FormDetails> formdetails;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getForm_id() {
		return form_id;
	}

	public void setForm_id(String form_id) {
		this.form_id = form_id;
	}

	public boolean isIs_deleted() {
		return is_deleted;
	}

	public void setIs_deleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	public Timestamp getCreated_date() {
		return created_date;
	}

	public void setCreated_date(Timestamp created_date) {
		this.created_date = created_date;
	}

	public Timestamp getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Timestamp updated_date) {
		this.updated_date = updated_date;
	}

	public int getCreated_by() {
		return created_by;
	}

	public void setCreated_by(int created_by) {
		this.created_by = created_by;
	}

	public int getLast_updated_by() {
		return last_updated_by;
	}

	public void setLast_updated_by(int last_updated_by) {
		this.last_updated_by = last_updated_by;
	}

	public int getLanguage_id() {
		return language_id;
	}

	public void setLanguage_id(int language_id) {
		this.language_id = language_id;
	}

	public List<FormDetails> getFormdetails() {
		return formdetails;
	}

	public void setFormdetails(List<FormDetails> formdetails) {
		this.formdetails = formdetails;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("FormMaster [id=");
		builder.append(id);
		builder.append(", form_id=");
		builder.append(form_id);
		builder.append(", is_deleted=");
		builder.append(is_deleted);
		builder.append(", created_date=");
		builder.append(created_date);
		builder.append(", updated_date=");
		builder.append(updated_date);
		builder.append(", created_by=");
		builder.append(created_by);
		builder.append(", last_updated_by=");
		builder.append(last_updated_by);
		builder.append(", language_id=");
		builder.append(language_id);
		builder.append(", formdetails=");
		builder.append(formdetails);
		builder.append("]");
		return builder.toString();
	}

}
