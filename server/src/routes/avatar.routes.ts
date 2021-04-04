import express from 'express'
import { uploadCloud } from '../config/cloudinary.config'

const router = express.Router()

router.post('/upload', uploadCloud.single('imageUrl'), (req, res) => {
  if (!req.file) {
    res.status(500).json({ code: 500, message: 'Error loading the file' })
    return
  }

  res.json({ secure_url: req.file.path })
})

export default router
