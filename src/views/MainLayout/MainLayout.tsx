import { ReactNode } from 'react'
import Header from '../Header/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
