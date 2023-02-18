import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';

const CartIcon = () => {

  const {setShowCart, totalQuantity} = useContext(CartContext)

  const handleClick = () => {
    setShowCart(prev => !prev)
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
