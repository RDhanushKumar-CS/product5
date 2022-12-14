import { Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { globalid } from 'src/global-variable';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {


   lid!:any
   lidstr!:string
   key: string = 'LID';
   role!:any
   rolestr!:string
   user=new User();
   errorMsg=''
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @ViewChild("myform") public formref!: NgForm;
  constructor(private router:Router , private service:RegistrationService ) {

   }

  ngOnInit(): void {

  }



   loginUser(role:string){

        this.service.getuserid(this.user).subscribe(
          data=>{

            this.lid=data
            this.lidstr=this.lid
            localStorage.setItem("lid",this.lidstr)
          }
        )



        console.log(localStorage.getItem("lid"))
        this.service.getuserrole(this.user).subscribe(
          data=>{

            this.role=data
            // console.log(this.role)
            this.rolestr=this.role
            // console.log(this.rolestr)
            // localStorage.setItem("role",this.rolestr)
          }
        )
        localStorage.setItem("role",role)

        console.log(localStorage.getItem("role"))

        this.service.loginUserFromRemote(this.user).subscribe(
          data=>{console.log("Login Success");
          console.log(role);
          this.router.navigate(['/home',role,this.lid])
        },
          error=>{console.log("FAILED");
          this.errorMsg= "*Invalid Email or Password or Role"
        }
        );
   }
   createNew(){
    this.router.navigate(['./register-component'])
   }
}
