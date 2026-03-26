import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'

function IraPricingPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-brand-light px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card w-full max-w-lg px-8 py-10 text-center md:px-12">
        <h2 className="m-0 text-2xl font-semibold text-brand-dark">Set up your plan today</h2>

        {/* Employer Cost */}
        <div className="mt-8 rounded-xl border border-brand-border px-6 py-4">
          <p className="m-0 text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Employer Cost
          </p>
          <p className="m-0 mt-1 text-lg font-semibold text-brand-dark">No cost to employer</p>
        </div>

        {/* Employee Cost */}
        <div className="mt-4 rounded-xl border-2 border-brand-gold px-6 py-4">
          <p className="m-0 text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Employee Cost
          </p>
          <p className="m-0 mt-1 text-lg font-semibold text-brand-dark">
            $4 / Month + asset based fees
          </p>
          <button
            onClick={() => navigate('/pricing/ira-fees')}
            className="mt-2 inline-block rounded-md bg-brand-dark px-3 py-1 text-xs font-semibold text-white transition hover:bg-brand-dark/80"
          >
            Footnote
          </button>
        </div>

        <p className="mt-8 text-sm font-medium text-brand-dark">
          Ready to start your IRA journey?
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/recommendation/ira')}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            ← Back
          </button>
          <Button className="px-10 py-3" onClick={() => navigate('/providers/ira')}>
            Let&apos;s Go
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IraPricingPage
