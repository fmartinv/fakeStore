import { create } from 'zustand'
import { fetchProducts } from '../utils/helpers.utils'
import { URL_CONSTANTS } from '../constants/constants'

import { CategoryObject, State } from '../models/store.type'
import { fetchProductData } from '../utils/store.utils'

export const useProductsStore = create<State>(set => ({
  categories: [],
  products: { products: [], total: 0, skip: 0, limit: 0 },
  fetchCategories: () => {
    const data = fetchProducts<CategoryObject[]>(
      `${URL_CONSTANTS.PRODUCTS_URL}/categories`
    )
    data.then(categories => set({ categories }))
  },

  fetchProducts: (limit, skip, searchParams, category) => {
    fetchProductData(limit, skip, searchParams, category)
      .then(products => set({ products }))
      .catch(error => console.error('Failed to fetch products:', error))
  }
}))
