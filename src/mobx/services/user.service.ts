import { host } from '../../assets/constants/host.constant';
import axios from 'axios';

export interface ICreateUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class UserService {

  regUser = async (user: ICreateUser) => {
    return axios.post(`${host}/user/register`, user)
  }
}

export default UserService