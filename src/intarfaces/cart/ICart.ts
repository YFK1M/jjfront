import { IProduct } from '../product/IProduct';
import { ITicket } from '../ticket/ITicket';

export interface ICart {
  type: string,
  amount: number,
  product: IProduct | ITicket
}