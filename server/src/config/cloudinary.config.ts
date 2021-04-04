const cloudinary = require('cloudinary').v2
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'

export const cloudinaryConfig = () =>
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  })

const storage = new CloudinaryStorage({ cloudinary })

export const uploadCloud = multer({ storage: storage })
