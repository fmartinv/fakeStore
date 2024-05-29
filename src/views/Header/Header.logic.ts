import { ChangeEvent, Dispatch } from 'react'
import { CategoryObject } from '../../models/store.type'

export const useHeaderLogic = (
  setCategory: Dispatch<React.SetStateAction<string | undefined>>
) => {
  const addCategory = (categories: CategoryObject[]): CategoryObject[] => {
    return [{ name: 'all', slug: 'all', url: 'all' }, ...categories]
  }
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    setCategory(value)
  }
  return { addCategory, handleChange }
}
