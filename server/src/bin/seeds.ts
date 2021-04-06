// DB connection
const mongoose = require('mongoose')
const dbName = 'goxo'
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Run npm run seed with this file as it is to seed the restaurants.
// After that, comment the Restaurant part (lines 17 - 36) and uncomment the Dish part (lines 39-106).
// Execute npm run seed again.

// Seed here!

// Restaurant
import Restaurant from '../models/Restaurant.model'

const restaurants = [
  {
    name: 'Pristino',
    address: 'Paseo de Eduardo Dato 8, 28010 Madrid, España',
  },
  {
    name: 'Medio o Pinto',
    address: 'Carrer de Calvet, 27, 08021 Barcelona, Spain',
  },
  {
    name: 'Los Guayres',
    address: 'Ctra Vieja, 6c, 35139 Lomo Quiebre, Las Palmas, Spain',
  },
]

Restaurant.create(restaurants)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))

// Dish
// import Dish from '../models/Dish.model'

// const dishes = [
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Cookie cake',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385183/goxo/cookie_cake.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Cachapa a dos texturas',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385835/goxo/cachapa_dos_texturas.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Tequeños',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385927/goxo/tequenos_pkmfso.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Montadito medio o pinto',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385929/goxo/montadito_gmdhg7.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Montaditos de arepa',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386050/goxo/montadito_arepa_dkqcjk.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b56',
//     name: 'Costilla negra',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386049/goxo/costilla_negra_tlbwnr.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b55',
//     name: 'Lubina a la sal',
//     imageUrl: 'hhttps://res.cloudinary.com/dcprb2mtk/image/upload/v1617386048/goxo/lubina_m07trz.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b55',
//     name: 'Verdinas en salsa verde con almejas',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386047/goxo/verdinas_pjwsoc.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b55',
//     name: 'Pan',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386217/goxo/pan_l2zx09.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b55',
//     name: 'Aperitivo',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386216/goxo/aperitivo_nmcpwh.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b55',
//     name: 'Ensalada de tomate',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386215/goxo/ensalada_tomate_hqo6lf.jpg',
//   },
//   {
//     restaurant: '6069898f9566380f7d117b57',
//     name: 'Espuma de papa con pulpo',
//     imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386215/goxo/espuma_papa_pulpo_jnsh1z.jpg',
//   },
// ]

// Dish.create(dishes)
//   .then(() => mongoose.connection.close())
//   .catch((err) => console.error(`Following error occured: \n ${err}`))
