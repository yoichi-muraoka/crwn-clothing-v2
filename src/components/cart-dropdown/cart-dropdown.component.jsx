import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from './../../contexts/cart.context'
import CartItem from './cart-item.component'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
  const { cartItems, setShowCart } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h2>No Items</h2>
        )}
      </div>
      <Link to='/checkout' onClick={() => setShowCart(false)}>
        <Button>Checkout</Button>
      </Link>
    </div>
  )
}

export default CartDropdown
