import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../../../website/src/app/models/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../../../../../website/src/app/services/post.service';
import {Member} from '../../../../models/member';
import {MembersService} from '../../../../services/members.service';

@Component({
  selector: 'app-show-memebers',
  templateUrl: './show-memebers.component.html',
  styleUrls: ['./show-memebers.component.css']
})
export class ShowMemebersComponent implements OnInit {

  member: Member;
  memberId: number;

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService
  ) {
    this.memberId = this.route.snapshot.params.memberId;
  }

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    this.membersService.findById(this.memberId).subscribe(response => {
      this.member = response;
    });
  }

}
