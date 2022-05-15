import { host } from '../../assets/constants/host.constant';
import axios from 'axios';

export interface ICreateUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

class UserService {
  regUser = async (user: ICreateUser) => {
    return axios.post(`${host}/user/register`, user)
  }
  login = async (user: ILoginUser) => {
    return axios.post(`${host}/user/login`, user)
  }
  refresh = async () => {
    return axios.get(`${host}/user/self`, {withCredentials: true})
  }
}

export default UserService