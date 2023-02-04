import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from './../../contexts/cart.context'
import CartItem from './cart-item.component'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h2>No Items</h2>
        )}
      </div>
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropdown
