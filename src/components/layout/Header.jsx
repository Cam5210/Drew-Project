import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../common/Logo'
import Button from '../common/Button'
import { NAV_ITEMS } from '../../utils/constants'
import { Menu, X } from 'lucide-react'

function Header() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-6 py-4 md:px-10">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>
          <Logo className="shrink-0" imageClassName="max-w-[180px]" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-dark lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/sign-in"
            onClick={(e) => { e.preventDefault(); navigate('/sign-in') }}
            className="hidden text-sm font-medium text-brand-dark transition hover:text-brand-gold sm:inline-flex"
          >
            Sign In
          </a>
          <Button className="hidden sm:inline-flex" onClick={() => navigate('/register')}>
            Get Started
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-dark transition hover:bg-brand-light lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-brand-border bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-light hover:text-brand-gold"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-brand-border" />
            <a
              href="/sign-in"
              onClick={(e) => { e.preventDefault(); navigate('/sign-in'); setMobileOpen(false) }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-light"
            >
              Sign In
            </a>
            <Button onClick={() => { navigate('/register'); setMobileOpen(false) }}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
