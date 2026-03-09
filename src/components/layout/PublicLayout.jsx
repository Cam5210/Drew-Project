import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageTransition from '../common/PageTransition'

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-light">
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
