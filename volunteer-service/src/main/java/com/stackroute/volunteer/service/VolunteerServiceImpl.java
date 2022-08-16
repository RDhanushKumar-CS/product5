package com.stackroute.volunteer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.volunteer.model.Volunteer;
import com.stackroute.volunteer.repository.VolunteerRepository;

@Service
public class VolunteerServiceImpl implements VolunteerService{

	
	VolunteerRepository VolunteerRepository;

	
	private VolunteerRepository repo;

	@Autowired
	public VolunteerServiceImpl(VolunteerRepository repo) {
		super();
//		System.out.println(repo);
		this.repo = repo;
	}

	@Override
	public List<Volunteer> getAll() {
//		System.out.println(repo.findAll());
		return (List<Volunteer>) repo.findAll();
	}

	@Override
	public Volunteer addNew(Volunteer emp) {
		
		return null;
	}
}
