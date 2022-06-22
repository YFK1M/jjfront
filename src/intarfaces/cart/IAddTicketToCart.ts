import { INewCartTicket } from './INewCartTicket'

export interface IAddTicketToCart {
  user_id: string,
  cartTicket: INewCartTicket
}
