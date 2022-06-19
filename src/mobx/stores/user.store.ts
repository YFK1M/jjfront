import { makeAutoObservable } from 'mobx'
import UserService, { ICreateUser, ILoginUser } from '../services/user.service'

export interface IUser {
  _id: string,
  name: string,
  surname: string,
  role: string,
  email: string,
  password: string,
  __v?: any
}

class UserStore {

    user: null | IUser = null
    userService = new UserService()

    constructor() {
        makeAutoObservable(this)
        this.refresh()
    }

    createUser = async (user: ICreateUser) => {
        await this.userService.regUser(user)
    }

    login = async (user: ILoginUser) => {
        const res = await this.userService.login(user)
        this.user = res.data
    }

    refresh = async () => {
        const res = await this.userService.refresh()
        if (res.data)
            this.user = res.data
    }
}


export default new UserStore()