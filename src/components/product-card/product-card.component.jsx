import './product-card.styles.scss'
import Button from './../button/button.component';
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)

    const {id, name, imageUrl, price} = product;

    return (<div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={() => addItemToCart(product)}>Add To Cart</Button>
    </div>)

}

export default ProductCard