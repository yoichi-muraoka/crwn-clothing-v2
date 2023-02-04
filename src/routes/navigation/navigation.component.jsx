import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from './../../contexts/user.context'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from './../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { showCart } = useContext(CartContext)
  console.log(currentUser)
  const links = [{ href: '/shop', label: 'SHOP' }]

  const signOutHandler = async () => {
    await signOutUser()
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
          <CartIcon />
        </div>
        { showCart && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
