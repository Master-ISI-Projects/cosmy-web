import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  postId: number;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.postId = this.route.snapshot.params.postId;
  }

  ngOnInit() {
    this.loadPoduct();
  }

  loadPoduct() {
    this.postService.findById(this.postId).subscribe(response => {
      this.post = response;
    });
  }

}
