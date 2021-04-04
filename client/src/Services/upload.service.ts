import axios, { AxiosInstance } from 'axios'

class UploadService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/avatar`,
      withCredentials: true,
    })
  }

  uploadFile = (fileForm: FileForm) => this.api.post('/upload', fileForm)
}

type FileForm = any

export default UploadService
