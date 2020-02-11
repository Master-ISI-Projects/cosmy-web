import { Component, OnInit } from '@angular/core';
import { Post } from '../../../Models/Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  posts: Post[] = [];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(response => {
      console.log(response);
      this.posts =  response;
    });
  }

}
