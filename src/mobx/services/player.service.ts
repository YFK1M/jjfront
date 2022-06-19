import { host } from '../../assets/constants/host.constant'

class PlayerService {

    getAllPlayers = async () => {
        return fetch(`${host}/player/get-all`).then(data => data.json())
    }
}

export default PlayerService