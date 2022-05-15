import { host } from '../../assets/constants/host.constant';

class MatchesService {

  getMatches = async () => {
    return fetch(`${host}/matches`).then(data => data.json())
  }
  getMatch = async (id: string) => {
    return fetch(`${host}/matches/${id}`).then(data => data.json())
  }
}

export default MatchesService