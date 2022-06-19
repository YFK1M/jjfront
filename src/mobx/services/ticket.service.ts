import { host } from '../../assets/constants/host.constant'

class TicketService {

    getAllTickets = async () => {
        return fetch(`${host}/ticket`).then(data => data.json())
    }
}

export default TicketService