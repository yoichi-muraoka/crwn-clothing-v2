import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from './../../contexts/user.context'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)
  const links = [{ href: '/shop', label: 'SHOP' }]

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>
            <CrownLogo className='logo' />
          </div>
        </Link>
        <div className='nav-links-container'>
          {links.map(link => (
            <Link key={link.label} className='nav-link' to={link.href}>
              {link.label}
            </Link>
          ))}
          {currentUser ? (
            <Link className='nav-link' onClick={signOutHandler}>Sign Out</Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
