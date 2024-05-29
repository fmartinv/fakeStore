import { URL_CONSTANTS } from '../constants/constants'
import { DummyProducts } from '../models/dummyProducts.type'
import { SearchParams } from '../models/store.type'
export async function fetchProductData(
  limit: number,
  skip: number,
  searchParams?: SearchParams,
  category?: string
): Promise<DummyProducts> {
  const baseURL = category
    ? `${URL_CONSTANTS.PRODUCTS_URL}/category/${encodeURIComponent(category)}`
    : URL_CONSTANTS.PRODUCTS_URL

  const url = new URL(baseURL)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('skip', skip.toString())

  if (searchParams) {
    if (searchParams.title) {
      url.searchParams.append('title', searchParams.title)
    }
    if (searchParams.priceMin !== undefined) {
      url.searchParams.append('priceMin', searchParams.priceMin.toString())
    }
    if (searchParams.priceMax !== undefined) {
      url.searchParams.append('priceMax', searchParams.priceMax.toString())
    }
  }

  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}
