/**
 * Fetches products from a specified URL asynchronously.
 *
 * @param {string} url - The URL from which to fetch the products.
 * @return {Promise<T>} A promise that resolves with the fetched data.
 */
export const fetchProducts = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data as T
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

/**
 * A function that generates a range of numbers from start to end inclusive.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @return {number[]} An array containing the generated range of numbers.
 */
export const getRange = (start: number, end: number) => {
  return [...Array(end - start + 1)].map((_, i) => start + i)
}
