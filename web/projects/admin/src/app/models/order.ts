import {OrderDetails} from './orderDetails';

export interface Order {
    id?: number;
    billingAdress?: number;
    deliveryAdress?: string;
    status: string;
    createdAt: Date;
    customer: string;
    orderDetails: OrderDetails[];
}
