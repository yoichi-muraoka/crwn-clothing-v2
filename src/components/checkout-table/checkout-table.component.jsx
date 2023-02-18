import { CheckoutContainer } from './checkout-table.styles'
import CheckoutTableRow from './checkout-table-row.component';
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

const CheckoutTable = () => {
    const {cartItems, totalPrice} = useContext(CartContext)
    return (
        <CheckoutContainer>
            <div className="total-price">Total: ${totalPrice}</div>
            {cartItems.map(item => (
                <CheckoutTableRow key={item.id} cartItem={item}  />
            ))}
        </CheckoutContainer>
    )
}

export default CheckoutTable