package com.stackroute.volunteer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.volunteer.repository.*;
import com.stackroute.volunteer.service.VolunteerService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/")
public class VolunteerController {
	@Autowired
    private VolunteerRepository VolunteerRepository;
 	
// 	@Autowired
//    private VolunteerService VolunteerService;
// 	
// 	@Autowired
// 	public VolunteerController(VolunteerService VolunteerService) {
// 		super();
// 		this.VolunteerService = VolunteerService;
// 	}
// 	
// 	public VolunteerController() {super();}
 	
 	
}
