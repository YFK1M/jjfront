import { makeAutoObservable } from 'mobx';
import UserService, { ICreateUser } from '../services/user.service';

class UserStore {

  user = []
  userService = new UserService()

  constructor() {
    makeAutoObservable(this)
  }

  createUser = async (user: ICreateUser) => {
    const res = await this.userService.regUser(user)
    this.user = res.data
  }
}


export default new UserStore()