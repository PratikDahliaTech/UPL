package com.upl.upl_survey.Model;

import java.sql.Timestamp;

public class FormDetails {

	private int id;
	private byte[] form_detail;
	private boolean is_updated = false;
	private Timestamp date;
	private int form_master_id;
	private int updated_by;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public byte[] getForm_detail() {
		return form_detail;
	}

	public void setForm_detail(byte[] form_detail) {
		this.form_detail = form_detail;
	}

	public boolean isIs_updated() {
		return is_updated;
	}

	public void setIs_updated(boolean is_updated) {
		this.is_updated = is_updated;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public int getForm_master_id() {
		return form_master_id;
	}

	public void setForm_master_id(int form_master_id) {
		this.form_master_id = form_master_id;
	}

	public int getUpdated_by() {
		return updated_by;
	}

	public void setUpdated_by(int updated_by) {
		this.updated_by = updated_by;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("FormDetails [id=");
		builder.append(id);
		builder.append(", form_detail=");
		builder.append(form_detail);
		builder.append(", is_updated=");
		builder.append(is_updated);
		builder.append(", date=");
		builder.append(date);
		builder.append(", form_master_id=");
		builder.append(form_master_id);
		builder.append(", updated_by=");
		builder.append(updated_by);
		builder.append("]");
		return builder.toString();
	}

}
