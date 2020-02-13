import { Component, OnInit } from '@angular/core';
import {Member} from '../../../../models/member';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../../services/members.service';
import {Order} from '../../../../models/order';
import {OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  order: Order;
  orderId: number;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.orderId = this.route.snapshot.params.orderId;
  }

  ngOnInit() {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.findById(this.orderId).subscribe(response => {
      console.log(response);
      this.order = response;
    });
  }

}
