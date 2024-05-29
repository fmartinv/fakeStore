import { useEffect, useState } from 'react'
import { useProductsStore } from '../../store/Categories.store'
import { useHeaderLogic } from './Header.logic'
import './Header.style.css'
import Select from '../../components/Select/Select'

const Header = () => {
  const [category, setCategory] = useState<string | undefined>('all')
  const { categories, fetchCategories, fetchProducts } = useProductsStore(
    state => state
  )
  const { addCategory, handleChange } = useHeaderLogic(setCategory)

  const completedCategories = addCategory(categories)

  useEffect(() => {
    if (category === 'all') {
      fetchProducts(10, 0, undefined, undefined)
    } else {
      fetchProducts(10, 0, undefined, category)
    }
  }, [category, fetchProducts])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])
  return (
    <div className='header'>
      <Select arr={completedCategories} handleChange={handleChange} />
    </div>
  )
}

export default Header
