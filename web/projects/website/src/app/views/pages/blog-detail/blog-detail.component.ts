import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { CommentService } from '../../../services/comment.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Comments } from '../../../models/comments';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: Post;
  postId: number;

  posts: Post[] = [];
 comments2:Comments[];

  private comments:Comments={
    id:null,
    createdAt:null,
    postId:null,
    commentedBy:'',
    comment:'',
  }

  MerchantResourceForm  = new FormGroup({

   comment: new FormControl(''),
  });


  myDate = new Date();
  add()
  {

    this.commentService.add(this.comments).subscribe(response => console.log('Seccess!', response),
    error => console.error('Error!' , error)
    );
  }


  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {
    this.postId = this.route.snapshot.params.postId;
  }

  ngOnInit() {
    this.postService.getPostById(this.postId).subscribe(response => {
      this.post =  response;
      this.loadComments();
        this.getPosts();
     });
  }

  loadComments() {
    this.commentService.getCommentsById(this.post.id).subscribe(response => {
      this.comments2 =  response;
    });
  }


  onAjouter(){
    
    this.comments.commentedBy="Hamza";
    this.comments.postId= this.postId;
    this.comments.createdAt = this.myDate;
    this.comments.comment = this.MerchantResourceForm.get('comment').value;
    this.add();
    this.loadComments();  
  }
  getPosts() {


    this.postService.getAll().subscribe(response => {
      console.log(response);
      this.posts =  response;
    }); }


}
