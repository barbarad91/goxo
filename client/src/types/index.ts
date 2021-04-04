export type Dish = {
  _id: string
  restaurant: Restaurant
  name: string
  imageUrl: string
}

export type Restaurant = {
  _id: string
  name: string
  address: string
}

export type Fav = {
  _id: string
  dish: string
  user: string
}
