import axios, { AxiosInstance } from 'axios'
import { Dish } from 'src/types'

class DishService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/dishes`,
      withCredentials: true,
    })
  }

  getDishes = () => {
    return this.api.get<GetDishesData>('/all')
  }
}

type GetDishesData = Dish[]

export default DishService
