import { ChangeEvent, FC } from 'react'
import { CategoryObject } from '../../models/store.type'
import './select.style.css'

interface SelectProps {
  arr: CategoryObject[]
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
}
const Select: FC<SelectProps> = ({
  arr,
  handleChange
}: SelectProps): JSX.Element => {
  return (
    <select onChange={handleChange} className='select'>
      {arr.map(cat => (
        <option key={cat?.slug} value={cat?.slug}>
          {cat?.name}
        </option>
      ))}
    </select>
  )
}

export default Select
