import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-brand-dark/70" />

        <div className="relative mx-auto flex min-h-[420px] max-w-content flex-col items-end justify-center px-6 py-16 md:px-10">
          <div className="rounded-card bg-white/90 px-8 py-6 text-right backdrop-blur">
            <p className="m-0 text-lg font-medium text-brand-muted">Retirement Done</p>
            <h1 className="m-0 text-4xl font-bold text-brand-dark md:text-5xl">
              UTAH&apos;S WAY
            </h1>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-b border-brand-border bg-white py-12 text-center">
        <h2 className="m-0 text-2xl font-semibold text-brand-dark md:text-3xl">
          Help Your Employees Start Saving <strong>Today.</strong>
        </h2>
        <div className="mt-6">
          <Button className="px-8 py-3 text-base" onClick={() => navigate('/register')}>
            Register Now
          </Button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
