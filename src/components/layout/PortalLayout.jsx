import { Outlet } from 'react-router-dom'
import Logo from '../common/Logo'
import { PORTAL_NAV_ITEMS } from '../../utils/constants'
import PageTransition from '../common/PageTransition'

function PortalLayout() {
  return (
    <div className="min-h-screen bg-brand-light">
      <header className="border-b border-brand-border bg-white">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-6 py-4 md:px-10">
          <div className="flex items-center gap-8">
            <Logo imageClassName="max-w-[180px]" />
            <nav className="hidden items-center gap-6 text-sm font-medium text-brand-dark lg:flex">
              {PORTAL_NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-brand-gold">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-sm font-medium text-brand-muted">Bernard</div>
        </div>
      </header>

      <main className="page-shell">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  )
}

export default PortalLayout
