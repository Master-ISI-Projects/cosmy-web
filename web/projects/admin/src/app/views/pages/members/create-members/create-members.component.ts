import { Component, OnInit } from '@angular/core';
import {Member} from '../../../../models/member';
import {MembersService} from '../../../../services/members.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-members',
  templateUrl: './create-members.component.html',
  styleUrls: ['./create-members.component.css']
})
export class CreateMembersComponent implements OnInit {

  newMember: Member = {firstName: '', lastName: '', phoneNumber: '', email: '', password: '', postsCount: 0, employeesCount: 0, siret: ''};

  constructor(
    private memebersService: MembersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveMember() {
    console.log(this.newMember);
    this.memebersService.save(this.newMember)
      .subscribe(response => {
        this.router.navigate(['members']);
      });
  }

}
