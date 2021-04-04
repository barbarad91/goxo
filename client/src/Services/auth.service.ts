import axios, { AxiosInstance } from 'axios'

class AuthService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true,
    })
  }

  signUp = (userData: SignUpData) => {
    return this.api.post<SignUpResponse>('/signup', userData, { withCredentials: true })
  }

  signIn = (userData: SignInData) => {
    return this.api.post<SignInResponse>('/signin', userData, { withCredentials: true })
  }
  getUser = () => {
    return this.api.get<GetUserResponse>('/user', { withCredentials: true })
  }
  signOut = () => {
    return this.api.get('/signout', { withCredentials: true })
  }
}

type SignInData = {
  username: string
  password: string
}

type UserData = { username: string; name: string }

type SignUpData = SignInData & { confirmPassword: string; name: string }

type SignUpResponse = UserData

type SignInResponse = UserData

type GetUserResponse = UserData | undefined

export default AuthService
