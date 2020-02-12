import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-index-order',
  templateUrl: './index-order.component.html',
  styleUrls: ['./index-order.component.css']
})
export class IndexOrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.orderService.findAll()
      .subscribe(response => {
        console.log(response);
        this.orders = response;
      });
  }
}
