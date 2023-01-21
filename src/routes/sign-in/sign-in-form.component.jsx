import { useState } from 'react'
import Button from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import {
  createUserDocFromAuth,
  signInWithEmail,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

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
      const userDocRef = await createUserDocFromAuth(user)
      console.log(userDocRef)
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
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
    console.log(userDocRef)
  }

  return (
    <>
      <div className='sign-in-container'>
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
            <Button buttonType='inverted' type='submit'>
              Sign In
            </Button>
            <Button buttonType='google' type='button' onClick={showSignInPopup}>
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInForm
