import { ICommand } from './ICommand';

export interface IMatch {
  _id: string,
  date: string,
  first_command_id: ICommand,
  second_command_id: ICommand,
  status: string,
}