// DB connection
const mongoose = require('mongoose')
const dbName = 'goxo'
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Seed here!
import Dish from '../models/Dish.model'

const dishes = [
  {
    restaurant: '6067555a3a69509a4099cd74',
    name: 'Cachapa a dos texturas',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385835/goxo/cachapa_dos_texturas.jpg',
  },
  {
    restaurant: '6067555a3a69509a4099cd74',
    name: 'Tequeños',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385927/goxo/tequenos_pkmfso.jpg',
  },
  {
    restaurant: '6067555a3a69509a4099cd74',
    name: 'Montadito medio o pinto',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617385929/goxo/montadito_gmdhg7.jpg',
  },
  {
    restaurant: '6067555a3a69509a4099cd74',
    name: 'Montaditos de arepa',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386050/goxo/montadito_arepa_dkqcjk.jpg',
  },
  {
    restaurant: '6067555a3a69509a4099cd74',
    name: 'Costilla negra',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386049/goxo/costilla_negra_tlbwnr.jpg',
  },
  {
    restaurant: '606754c33a69509a4099cd72',
    name: 'Lubina a la sal',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386049/goxo/costilla_negra_tlbwnr.jpg',
  },
  {
    restaurant: '606754c33a69509a4099cd72',
    name: 'Verdinas en salsa verde con almejas',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386047/goxo/verdinas_pjwsoc.jpg',
  },
  {
    restaurant: '606754c33a69509a4099cd72',
    name: 'Pan',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386217/goxo/pan_l2zx09.jpg',
  },
  {
    restaurant: '606754c33a69509a4099cd72',
    name: 'Aperitivo',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386216/goxo/aperitivo_nmcpwh.jpg',
  },
  {
    restaurant: '606754c33a69509a4099cd72',
    name: 'Ensalada de tomate',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386215/goxo/ensalada_tomate_hqo6lf.jpg',
  },
  {
    restaurant: '6067557c3a69509a4099cd75',
    name: 'Espuma de papa con pulpo',
    imageUrl: 'https://res.cloudinary.com/dcprb2mtk/image/upload/v1617386215/goxo/espuma_papa_pulpo_jnsh1z.jpg',
  },
]

Dish.create(dishes)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))
