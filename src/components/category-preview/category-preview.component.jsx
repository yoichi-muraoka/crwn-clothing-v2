import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'
import ProductCard from './../product-card/product-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title as="h2">
        <Link to={title.toLowerCase()}>
          <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
