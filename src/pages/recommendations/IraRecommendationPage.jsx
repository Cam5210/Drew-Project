import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'

function IraRecommendationPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card w-full max-w-lg px-8 py-10 text-center md:px-12">
        <h1 className="m-0 text-2xl font-semibold leading-snug text-brand-dark">
          Based on your inputs, an{' '}
          <span className="text-brand-gold">IRA</span> is the best option for you.
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-brand-muted">
          An IRA-based plan offers your company a simple, cost-effective way to provide retirement
          benefits, with less administration to manage.
        </p>

        <p className="mt-6 text-sm font-bold text-brand-dark">Continue with IRA Plan</p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/beehive-pathway')}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            ← Back
          </button>
          <Button className="px-10 py-3" onClick={() => navigate('/pricing/ira')}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IraRecommendationPage
