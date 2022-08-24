import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor-profile/Doctor';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  id!: number;
  Volunteer: Volunteer = new Volunteer();
  Volunteers:any[]=[]
  userfile:any = File
  
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private VolunteerService: VolunteerService) { }

  ngOnInit() {
    this.Volunteer = new Volunteer();

    this.id = this.route.snapshot.params['id'];
    
    this.VolunteerService.getVolunteer(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.Volunteer = data;
      }, (error: any) => console.log(error));
      this.reloadData()
  }
  reloadData() {
    
    
    this.VolunteerService.getVolunteer(this.id).subscribe(
     data=>{
       this.Volunteers.push(data);
       
     }
   );

  
 }
  updateVolunteer() {
    
    this.VolunteerService.updateVolunteer(this.id, this.Volunteer)
      .subscribe((data: any) => {
        console.log(data);
        this.Volunteer = new Volunteer();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

 
  
  onSubmit() {
    this.submitted = true;
    this.updateVolunteer(); 
    this.updateimage();
    alert("DONE")
    this.router.navigate(['volunteer-display',this.id]);   
  }
  
  gotoList() {
    this.router.navigate(['volunteer-display']);
  }
  onselectedfile(_Event: any) {
    const file = _Event.target.files[0];
    console.log(file );
    this.userfile = file
  }
  updateimage(){
    console.log(this.id);
    console.log(this.userfile);
    
    this.VolunteerService.sendimage(this.id,this.userfile).subscribe();
  }
}
