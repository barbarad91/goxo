import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import AuthService from 'src/services/auth.service'
import { useLoggedUserContext } from 'src/pages/LoggedUserContext'
import { useHistory } from 'react-router'
import { Alert } from '@material-ui/lab'
import { CircularProgress, makeStyles, Snackbar, Theme } from '@material-ui/core'
import UploadService from 'src/services/upload.service'

type SignUpFormProps = {
  formClass?: string
  submitClass?: string
}

const SignUpForm = ({ formClass, submitClass }: SignUpFormProps) => {
  const classes = useStyles()

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signUpError, setSignUpError] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const history = useHistory()

  const { setUser } = useLoggedUserContext()

  const authService = new AuthService()
  const uploadService = new UploadService()

  const handleFileUpload = async (e: React.ChangeEvent) => {
    setIsUploading(true)

    const uploadData = new FormData()
    const target = e.target as HTMLInputElement

    if (target && target.files) {
      uploadData.append('imageUrl', target.files[0])

      try {
        const uploadResponse = await uploadService.uploadFile(uploadData)
        setIsUploading(false)
        setImageUrl(uploadResponse.data.secure_url)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSignUpError('')
    try {
      const userData = await authService.signUp({ username, name, password, confirmPassword, imageUrl })
      setUser(userData.data)
      history.push('/')
    } catch (error) {
      setSignUpError(error.response.data.message)
      setSnackbarOpen(true)
    }
  }

  return (
    <>
      {signUpError && (
        <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={() => setSnackbarOpen(false)}>
          <Alert severity="error">{signUpError}</Alert>
        </Snackbar>
      )}
      <form className={formClass} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="avatar"
          label="Avatar Image"
          name="avatar"
          type="file"
          autoComplete="avatar"
          autoFocus
          onChange={handleFileUpload}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {isUploading && (
          <div className={classes.uploading}>
            <CircularProgress size="30px" />
          </div>
        )}
        <Button
          disabled={isUploading}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitClass}
        >
          Sign Up
        </Button>
      </form>
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  uploading: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default SignUpForm
