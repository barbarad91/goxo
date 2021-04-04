import axios, { AxiosInstance } from 'axios'
import { Fav } from 'src/types'

class FavService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/fav`,
      withCredentials: true,
    })
  }

  getUserFavs = (userId: string) => {
    return this.api.get<Fav[]>(`/userfavs/${userId}`)
  }

  newFav = ({ dishId, userId }: FavRequest) => {
    return this.api.post(`/${dishId}/${userId}`)
  }

  deleteFav = ({ dishId, userId }: FavRequest) => {
    return this.api.delete(`/${dishId}/${userId}`)
  }
}

type FavRequest = {
  dishId: string
  userId: string
}

export default FavService
