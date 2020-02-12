import { Component, OnInit } from '@angular/core';
import { Member } from '../../../../models/member';
import { MembersService } from '../../../../services/members.service';

@Component({
  selector: 'app-index-members',
  templateUrl: './index-members.component.html',
  styleUrls: ['./index-members.component.css']
})
export class IndexMembersComponent implements OnInit {

  members: Member[] = [];

  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.findAll()
      .subscribe(response => {
        console.log(response);
        this.members = response;
      });
  }

}
