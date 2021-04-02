import axios, { AxiosInstance } from 'axios'

class DishService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/dishes`,
      withCredentials: true,
    })
  }

  getDishes = () => {
    return this.api.get<getDishesData>('/all')
  }
}

type DishData = {
  restaurant: string
  name: string
  imageUrl: string
}

type getDishesData = []

export default DishService
