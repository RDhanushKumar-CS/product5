import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {

  searchText: string = '';
  Volunteer!: Observable<Volunteer[]>;
  volunteer: Volunteer = new Volunteer();

  constructor(
    private VolunteerService: VolunteerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.Volunteer = this.VolunteerService.getVolunteers();
  }
}
