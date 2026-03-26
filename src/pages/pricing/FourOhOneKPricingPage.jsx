import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'

function FourOhOneKPricingPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-brand-light px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card w-full max-w-lg px-8 py-10 text-center md:px-12">
        <h2 className="m-0 text-2xl font-semibold text-brand-dark">Set up your plan today</h2>

        <p className="mt-4 text-sm text-brand-muted">starting as low as</p>
        <p className="m-0 text-5xl font-bold text-brand-dark">$249 / Month</p>

        <ul className="mx-auto mt-6 max-w-xs space-y-2 text-left text-sm text-brand-muted">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-brand-gold">•</span> Top brands at a low cost
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-brand-gold">•</span> Simplified onboarding
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-brand-gold">•</span> Available tax credits
          </li>
        </ul>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => navigate('/pricing/tax-credit')}
            className="rounded-lg border border-brand-border px-4 py-2 text-xs font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            View tax credits
          </button>
        </div>

        <p className="mt-8 text-sm font-medium text-brand-dark">
          Ready to start your 401(k) journey?
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/recommendation/401k')}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            ← Back
          </button>
          <Button className="px-10 py-3" onClick={() => navigate('/providers/401k')}>
            Let&apos;s Go
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FourOhOneKPricingPage
