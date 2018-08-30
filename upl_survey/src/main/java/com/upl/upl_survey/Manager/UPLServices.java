package com.upl.upl_survey.Manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.upl.upl_survey.Dao.UserDao;
import com.upl.upl_survey.Model.UserMaster;

@RestController
@RequestMapping("/upl_survey")
public class UPLServices {

	@Autowired
	private UserDao userDao;

	@RequestMapping(value = "/UserLogin" , method = RequestMethod.POST)
	public List<UserMaster> getUsers() {
		List<UserMaster> users = userDao.getUserRoles();

		if (users.isEmpty()) {
			UserMaster user = new UserMaster();
			user.setId(1);
			user.setType("ADMIN");
			users.add(user);
		}
		System.out.println("Users Roles List:{}" + users.toString());
		return users;
	}
}