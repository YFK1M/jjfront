import { makeAutoObservable } from 'mobx'
import TicketService from '../services/ticket.service'

interface ITicket {
  _id: string,
  price: number,
  match_id: IMatch,
}

interface IMatch {
  _id: string,
  date: string,
  first_command_id: ICommand,
  second_command_id: ICommand,
  status: string,
}

interface ICommand {
  _id: string,
  image: string,
  title: string,
}

class TicketStore {

    ticketService = new TicketService()
    ticket: Array<ITicket> = []

    constructor() {
        makeAutoObservable(this)
        this.loadAllTickets()
    }

    getAllTickets = () => {
        return this.ticket
    }

    loadAllTickets = async () => {
        this.ticket = await this.ticketService.getAllTickets()
    }
}

export default new TicketStore()