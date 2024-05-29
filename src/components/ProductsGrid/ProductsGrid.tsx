import { useEffect, useState } from 'react'
import { useProductsStore } from '../../store/Categories.store'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import './ProductsGrid.css'

const ProductsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { products, fetchProducts: fetchProductsFromStore } = useProductsStore(
    state => state
  )

  const TOTAL_PAGES = products?.total
  const limit = 10
  const skipLimit = currentPage * limit - limit

  useEffect(() => {
    fetchProductsFromStore(limit, skipLimit)
  }, [fetchProductsFromStore, skipLimit])

  return (
    <>
      <div className='product-container'>
        {products.total === 0 && 'No products found'}

        {products?.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        limit={limit}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}

export default ProductsGrid
