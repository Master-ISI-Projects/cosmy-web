import {Product} from './product';

export interface OrderDetails {
  id?: number;
  qte: number;
  products: string;
  price: number;
}
