import { DummyProducts } from './dummyProducts.type'
// import { Category } from './productsCategories.type'

export type SearchParams = {
  title?: string
  priceMin?: number
  priceMax?: number
}
export type CategoryObject = {
  name: string
  slug: string
  url: string
}

export interface State {
  categories: CategoryObject[]
  fetchCategories: () => void
  products: DummyProducts

  fetchProducts: (
    limit: number,
    skip: number,
    searchParams?: SearchParams,
    category?: string
  ) => void
}
