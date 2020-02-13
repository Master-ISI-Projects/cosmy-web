import { Component, OnInit } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';  

import {Post} from '../../../models/post';
import {PostService} from '../../../services/post.service';
import {OrderService} from '../../../services/order.service';
import {Member} from '../../../models/member';
import {MembersService} from '../../../services/members.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latestPosts: Post[] = [];
  latestMembers: Member[] = [];
  penddingOrdersCount: number = 0;
  cancledOrdersCount: number = 0;
  confirmedOrdersCount: number = 0;

  customOptions: OwlModule   = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  constructor(
    private postService: PostService,
    private orderService: OrderService,
    private memberService: MembersService,
  ) { }

  ngOnInit(): void {
    this.loadLatestPosts();
    this.loadLatestMembers();
    this.loadCountsOfEntries();
  }

  loadLatestPosts(): void {
    this.postService.getLatestPosts(5)
      .subscribe(response => {
        this.latestPosts = response;
      });
  }

  loadLatestMembers(): void {
    this.memberService.getLatestMembers(3)
      .subscribe(response => {
        this.latestMembers = response;
      });
  }

  loadCountsOfEntries(): void {
    this.orderService.getCountOrderByStatus('En Attent')
      .subscribe(response => {
        this.penddingOrdersCount = response.length;
      });

    this.orderService.getCountOrderByStatus('Annulé')
      .subscribe(response => {
        this.cancledOrdersCount = response.length;
      });

    this.orderService.getCountOrderByStatus('Confirmé')
      .subscribe(response => {
        this.confirmedOrdersCount = response.length;
      });
  }

}
