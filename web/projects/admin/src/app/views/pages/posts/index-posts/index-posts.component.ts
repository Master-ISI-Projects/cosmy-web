import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product.service';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post.service';

@Component({
  selector: 'app-index-posts',
  templateUrl: './index-posts.component.html',
  styleUrls: ['./index-posts.component.css']
})
export class IndexPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.findAll()
      .subscribe(response => {
        this.posts = response;
      });
  }

}
