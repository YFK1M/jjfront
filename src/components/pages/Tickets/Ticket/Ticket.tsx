import { FC, ReactChild } from 'react';
import s from './Ticket.module.sass';
import Command from './Command/Command';

interface ITicket {
  price: number,
  match: IMatch,
  children?: ReactChild,
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

const Ticket: FC<ITicket> = ({ match, price }) => {

  const firstCommand = match.first_command_id
  const secondCommand = match.second_command_id
  const date = match.date.split(',');

  return (
    <div className={s.ticket}>
      <Command image={firstCommand.image} title={firstCommand.title}/>
      <Command image={secondCommand.image} title={secondCommand.title}/>
      <div className={s.ticket__btn}>{price} руб.</div>
      <div className={s.ticket__date}>
        <div className={s.ticket__day}>{date[0]}</div>
        <div className={s.ticket__time}>{date[1]}</div>
      </div>
    </div>
  );
};

export default Ticket;