import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import theme from './components/theme'
import UserContext from './pages/LoggedUserContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
)
