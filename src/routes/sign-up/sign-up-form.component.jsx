import { useState } from 'react'
import Button from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth
} from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss'

const defaultFormFielsds = {
  displayName: '',
  email: '',
  password: '',
  passwordConf: ''
}

const SignUpForm = () => {
  const [formFielsds, setFormFielsds] = useState(defaultFormFielsds)
  const { displayName, email, password, passwordConf } = formFielsds

  const handleChange = event => {
    const { name, value } = event.target
    setFormFielsds(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== passwordConf) {
      alert('確認用パスワードと一致しません')
      return
    }

    try {
      // AuthenticationのUsersとして登録
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      // Firestoreに登録
      createUserDocFromAuth({ ...user, displayName, createdAt: new Date() })
      setFormFielsds(defaultFormFielsds)
      alert('登録しました')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('すでに登録済みのメールアドレスです')
      } else if (error.code === 'auth/weak-password') {
        alert('パスワードは6文字以上で設定してください')
      } else {
        console.log(error.code)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          forId='display-name'
          label='Display Name'
          type='text'
          name='displayName'
          onChange={handleChange}
          required
          value={displayName}
        />

        <FormInput
          forId='email'
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          required
          value={email}
        />

        <FormInput
          forId='password'
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          required
          value={password}
        />

        <FormInput
          forId='passwordConf'
          label='Password (Confirmation)'
          type='password'
          name='passwordConf'
          onChange={handleChange}
          required
          value={passwordConf}
        />
        <Button buttonType='inverted' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm
