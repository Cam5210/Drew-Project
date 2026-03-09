import { Outlet } from 'react-router-dom'
import Logo from '../common/Logo'
import PageTransition from '../common/PageTransition'

function AuthLayout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-light via-white to-brand-light px-6 py-10">
      <div className="w-full max-w-3xl">
        <Logo className="mb-8 flex justify-center" imageClassName="max-w-[220px]" />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </main>
  )
}

export default AuthLayout
