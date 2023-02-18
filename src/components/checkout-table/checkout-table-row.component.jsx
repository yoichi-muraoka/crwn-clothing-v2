import Button from './../button/button.component'
import { useContext } from 'react'
import { CartContext } from './../../contexts/cart.context'

const CheckoutTableRow = ({ cartItem }) => {
  const { deleteItemFromCart, addItemToCart, reduceItemFromCart } =
    useContext(CartContext)
  const { id, name, price, imageUrl, quantity } = cartItem

  const increaseQuantity = () => {
    addItemToCart(cartItem)
  }

  const decreaseQuantity = () => {
    reduceItemFromCart(cartItem)
  }

  const deleteItem = () => {
    deleteItemFromCart(id)
  }

  return (
    <div className='checkout-table-row'>
      <img src={imageUrl} alt={name} />
      <div>
        <h2>
          {name} <span className='price'>(${price})</span>
        </h2>
        <div>
          <button
            className='change-quantity'
            disabled={quantity === 1}
            onClick={decreaseQuantity}
          >
            &lt;
          </button>
          <input className='quantity' type='text' value={quantity} readOnly />
          <button
            className='change-quantity'
            disabled={quantity >= 100}
            onClick={increaseQuantity}
          >
            &gt;
          </button>
        </div>
        <p className='subtotal'>Subtotal: ${price * quantity}</p>
        <Button onClick={deleteItem}>DELETE</Button>
      </div>
    </div>
  )
}

export default CheckoutTableRow
