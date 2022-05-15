import { FC } from 'react';
import s from './Tickets.module.sass';
import { observer } from 'mobx-react-lite';
import TicketStore from '../../../mobx/stores/ticket.store';
import Ticket from './Ticket/Ticket';


const Tickets: FC = observer(() => {

  const tickets = TicketStore.getAllTickets().map(ticket => {
      return (
        <Ticket key={ticket._id} match={ticket.match_id} price={ticket.price}/>
      );
  });

  return (
    <div className={s.tickets}>
      <div className={s.tickets__header}>
        <h1 className={s.tickets__h1}>Билеты на ближайшие матчи</h1>
      </div>
      <div className={s.tickets__content}>
        {tickets}
      </div>
    </div>
  );
});

export default Tickets;