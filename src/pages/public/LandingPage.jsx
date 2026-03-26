import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="relative flex min-h-[calc(100vh-140px)] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/50" />

      <div className="relative w-full max-w-lg rounded-card bg-white/95 px-10 py-12 text-center shadow-card backdrop-blur">
        <p className="m-0 text-lg font-medium text-brand-muted">Retirement Done</p>
        <h1 className="m-0 mt-1 text-4xl font-bold text-brand-dark md:text-5xl">
          UTAH&apos;S WAY
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-lg font-semibold text-brand-dark">
          Help Your Employees Start Saving <strong>Today.</strong>
        </p>
        <div className="mt-6">
          <Button className="px-10 py-3 text-base" onClick={() => navigate('/register')}>
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
