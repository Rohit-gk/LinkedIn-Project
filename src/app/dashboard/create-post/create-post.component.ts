import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/Models/add-post.models';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }

  post : AddPostRequest = {
    // id:'',
    title:'',
    content:'',
    summary:'',
    imageUrl:'',
    urlHandle:'',
    author:''
  }

  ngOnInit(){
  }
  
  onSubmit(){
    this.api.addPost(this.post).subscribe(
        data =>{
          alert("Success");
        }
    )
  }

  allPostPage(){
    this.router.navigate(['/dashboard/allposts'])
  }

}
