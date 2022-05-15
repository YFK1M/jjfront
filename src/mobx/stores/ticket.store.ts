import { makeAutoObservable, toJS } from 'mobx';
import TicketService from '../services/ticket.service';


interface ITicket {
  _id: string,
  price: number,
  match_id: object,
}

class TicketStore {

  ticketService = new TicketService()
  ticket: Array<ITicket> = []

  constructor() {
    makeAutoObservable(this)
    this.loadAllTickets();
  }

  getAllTickets = () => {
    return this.ticket
  }

  loadAllTickets = async () => {
    this.ticket = await this.ticketService.getAllTickets()
  };
}

export default new TicketStore()