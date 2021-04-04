import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import AuthService from 'src/services/auth.service'

const LoggedUserContext = createContext<LoggedUserContextData | undefined>(undefined)

export const useLoggedUserContext = () => {
  const context = useContext(LoggedUserContext)

  if (!context) throw new Error('error')

  return context
}

const UserContext: FunctionComponent = (props) => {
  const authService = useMemo(() => new AuthService(), [])

  const [user, setUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const fetchData = await authService.getUser()

      setUser(fetchData.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }, [authService])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return <LoggedUserContext.Provider value={{ user, setUser, loading }}>{props.children}</LoggedUserContext.Provider>
}

type LoggedUserContextData = {
  user: User | undefined
  setUser: Dispatch<SetStateAction<User | undefined>>
  loading: boolean
}

type User = {
  username: string
  name: string
}

export default UserContext
