import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const links = [
    { href: '/shop', label: 'SHOP' },
    { href: '/sign-in', label: 'SING IN' }
  ]

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
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
