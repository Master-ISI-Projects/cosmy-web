import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: Post;
  postId: number;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.postId = this.route.snapshot.params.postId;
  }

  ngOnInit() {
    this.postService.getPostById(this.postId).subscribe(response => {
      this.post =  response;
    });
  }

}
