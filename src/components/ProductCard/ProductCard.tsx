import { Product } from '../../models/dummyProducts.type'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, images, title, price, rating, category } = product

  return (
    <div className='card' key={id}>
      <img className='card-img-top' src={images[0]} alt={title} />
      <div className='card-body'>
        <p className='card-text'>{title}</p>
        <p className='card-text'>{price}$</p>
        <p className='card-text'>{rating}</p>
        <p className='card-text'>{category}</p>
      </div>
    </div>
  )
}

export default ProductCard
