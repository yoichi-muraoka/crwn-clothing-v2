import SignUpForm from '../sign-up/sign-up-form.component'
import SignInForm from '../sign-in/sign-in-form.component'
import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
