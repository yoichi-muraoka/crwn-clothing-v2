import { useState } from 'react'
import Button, {
  BUTTON_TYPE_CLASSES
} from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import {
  signInWithEmail,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'
import { SignInContainer } from './sign-in-form.styles'

const defaultSignInFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [signInfields, setSignInfields] = useState(defaultSignInFields)
  const { email, password } = signInfields

  const handleChange = event => {
    const { name, value } = event.target
    setSignInfields(prev => {
      return { ...prev, [name]: value }
    })
  }

  // メールアドレスによるサインイン
  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { user } = await signInWithEmail(email, password)
      setSignInfields(defaultSignInFields)
    } catch (error) {
      console.log(error)
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        alert('メールアドレス、またはパスワードが異なります')
      }
    }
  }

  // Googleサインイン
  const showSignInPopup = async () => {
    await signInWithGooglePopup()
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your Email or Google account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          forId='sign-in-email'
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          required
          value={email}
        />

        <FormInput
          forId='sign-in-password'
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          required
          value={password}
        />

        <div className='buttons-container'>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={showSignInPopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
