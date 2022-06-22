import { ReactNode } from 'react';
import { IMatch } from './IMatch';

export interface ITicket {
  _id: string,
  price: number,
  match: IMatch,
  children?: ReactNode,
}