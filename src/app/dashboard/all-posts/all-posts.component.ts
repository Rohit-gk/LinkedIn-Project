import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private api:ApiService) { }

  posts:Post[] = [];

  ngOnInit(){
    this.api.getAllPosts().subscribe(
      response =>{
        this.posts = response;
      }
    )
  }

  deletePost(id:any) {
    if(confirm("Are you sure to delete " + id)) {
      this.api.deletePost(id).subscribe(response => {
        location.reload();
      })
    }
  }
}
