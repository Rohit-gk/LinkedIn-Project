import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/view.profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  profiles:Profile[] = [];

  ngOnInit(){
    this.api.getAllProfiles().subscribe(
      response =>{
        this.profiles = response;
      }
    )
  }

  goToEditProfile(){
    this.router.navigate(['/dashboard/updateprofile'])
  }

  deleteProfile(userid:any) {
    if(confirm("Are you sure to delete " + userid)) {
      this.api.deleteProfile(userid).subscribe(response => {
        location.reload();
      })
    }
  }

}
