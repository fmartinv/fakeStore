import { getRange } from '../../utils/helpers.utils'
import './Pagination.css'
import { PaginationProps } from './Pagination.types'

const Pagination = ({
  limit,
  totalPages,
  currentPage,
  onPageChange
}: PaginationProps) => {
  const pagesTotal = Math.ceil(totalPages / limit)
  const pages = getRange(1, pagesTotal)

  return (
    <div className='pagination-container'>
      {pages.map(page => (
        <button
          key={page}
          className={
            currentPage === page ? 'pagination-item active' : 'pagination-item'
          }
          onClick={() => onPageChange(page)}
        >
          <span>{page}</span>
        </button>
      ))}
    </div>
  )
}

export default Pagination
