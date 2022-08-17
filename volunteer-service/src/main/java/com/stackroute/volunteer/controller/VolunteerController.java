package com.stackroute.volunteer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.volunteer.execptions.ResourceNotFoundException;
import com.stackroute.volunteer.model.Volunteer;
import com.stackroute.volunteer.repository.VolunteerRepository;
import com.stackroute.volunteer.service.VolunteerService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/")
public class VolunteerController {
	@Autowired
    private VolunteerRepository VolunteerRepository;
 	
 	@Autowired
    private VolunteerService VolunteerService;
 	
 	@Autowired
 	public VolunteerController(VolunteerService VolunteerService) {
 		super();
 		this.VolunteerService = VolunteerService;
 	}
 	
 	public VolunteerController() {super();}
 	
 	  @GetMapping("Volunteer")
	    public List < Volunteer > getMedicine() {
	    	System.out.println(this.VolunteerRepository.findAll());
	        return this.VolunteerRepository.findAll();
	    }
	
 	
 	@PutMapping("Volunteer/{id}")
		public ResponseEntity<Volunteer> updateVolunteer(@PathVariable(value = "id") int Id,@Validated @RequestBody Volunteer VolunteerDetails) throws ResourceNotFoundException {
    	Volunteer Volunteer = VolunteerRepository.findById(Id)
					.orElseThrow(() -> new ResourceNotFoundException("Medicine not found for this id :: " + Id));

    	Volunteer.setAddress(VolunteerDetails.getAddress());
    	Volunteer.setCity(VolunteerDetails.getCity());
			final Volunteer updatedVolunteer = VolunteerRepository.save(Volunteer);
			return ResponseEntity.ok(updatedVolunteer);
		}
 	@PostMapping("Volunteer")
    public ResponseEntity<Volunteer> addNewHandler(@RequestBody Volunteer Volunteer) {
//    	System.out.println(MedicineService.getAll());
		
			return new ResponseEntity<Volunteer>(VolunteerService.addNew(Volunteer), HttpStatus.CREATED);
		

}
 	
 	
}
