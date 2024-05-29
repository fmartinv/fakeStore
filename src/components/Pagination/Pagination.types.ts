export type PaginationProps = {
  limit: number
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}
