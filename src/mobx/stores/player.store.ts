import { makeAutoObservable } from 'mobx'
import PlayerService from '../services/player.service'

interface IPlayers {
  images: Array<IImages>,
  player: IPlayer
}

interface IImages {
  _id: string,
  image_url: string,
  player_id: string
}

interface IPlayer {
  _id: string,
  age: number,
  goal_count: number,
  match_count: number,
  name: string,
  surname: string,
  position: string,
}

class PlayerStore {

    playerService = new PlayerService()
    players : Array<IPlayers> = []

    constructor() {
        makeAutoObservable(this)
        this.loadProducts()
    }

    getAllPlayers = () => {
        return this.players
    }

    loadProducts = async () => {
        this.players = await this.playerService.getAllPlayers()
    }
}

export default new PlayerStore()