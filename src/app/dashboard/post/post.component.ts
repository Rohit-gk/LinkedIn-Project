import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post.models';
import { Profile } from 'src/app/Models/view.profile.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router:Router,private api:ApiService) { }

  post : Post[] = [];
  profiles : Profile[] = [];

  
  posts : Post | undefined;

  ngOnInit(){
    // this.getProfile(); 
    this.getAllPosts();
  }

  getAllPosts(){
    this.api.getAllPosts().subscribe(
      response =>{
        this.post = response;
        this.posts = this.post[0];
      }
    )
  }

  // getProfile(){
  //   this.api.getAllProfiles().subscribe(
  //     response =>{
  //       this.post = response;
  //       this.posts = this.post[0];
  //     }
  //   )
  // }

  goToJobPage(){
    this.router.navigate(['dashboard/jobs'])
  }

  addPost(){
    this.router.navigate(['dashboard/createpost'])
  }

  deletePost(id:any) {
    if(confirm("Are you sure to delete " + id)) {
      this.api.deletePost(id).subscribe(response => {
        location.reload();
      })
    }
  }

}
