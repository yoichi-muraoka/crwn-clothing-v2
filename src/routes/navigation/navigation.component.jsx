import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'
import { UserContext } from './../../contexts/user.context'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from './../../contexts/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { showCart } = useContext(CartContext)
  const links = [{ href: '/shop', label: 'SHOP' }]

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
            <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          {links.map(link => (
            <NavLink key={link.label} to={link.href}>
              {link.label}
            </NavLink>
          ))}
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {showCart && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
