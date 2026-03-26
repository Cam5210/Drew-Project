import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'

function IraFeeDetailsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card mx-auto max-w-2xl px-8 py-10 md:px-12">
        <h2 className="m-0 text-xl font-bold text-brand-dark">Current IRA Holder Fees</h2>

        <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed text-brand-dark">
          <li>
            <strong>Program Administration Fee (Provider):</strong> 0.25% of assets
          </li>
          <li>
            <strong>State Fee (oversight/operations):</strong> 0.05% of assets
          </li>
          <li>
            <strong>Underlying fund fees:</strong> 0.025% – 0.19% of assets (varies by option)
          </li>
          <li>
            <strong>Fixed Account Fee:</strong> $4.25 per quarter ($17/year)
          </li>
          <li>
            <strong>Activity fees (optional):</strong> Paper delivery $1.25/quarter; paper check
            $5/check
          </li>
        </ul>
        <p className="mt-3 text-sm text-brand-muted">
          Together, the <strong>total annualized asset-based fee</strong> is 0.325% – 0.49%
          (admin + state + fund), plus the fixed $17/year.
        </p>

        <h3 className="mt-8 text-lg font-bold text-brand-dark">Employers:</h3>
        <p className="mt-2 text-sm text-brand-dark">
          <strong>No employer fee</strong> to use program. (Some employers may incur separate
          payroll provider integration charges — those are paid to the payroll company, not the
          program.)
        </p>

        <h3 className="mt-8 text-lg font-bold text-brand-dark">
          Context on Earlier Pricing/Breakpoints:
        </h3>
        <p className="mt-2 text-sm text-brand-muted">
          The original 2018 contract set the admin fee at <strong>0.75%</strong>, with scheduled
          step-downs as assets grew (down to <strong>0.15%</strong> at &gt;$15B). The program
          later moved to the current <strong>0.25%</strong> admin fee structure.
        </p>

        <h3 className="mt-8 text-lg font-bold text-brand-dark">Examples In Dollars</h3>
        <ul className="mt-3 space-y-2 pl-5 text-sm text-brand-dark">
          <li>
            On $5,000 balance: asset based fees ={' '}
            <strong>$16.25 – $24.50/year</strong> (0.325 – 0.49%), plus $17 fixed →{' '}
            <strong>$33.25 – $41.50/year.</strong>
          </li>
          <li>
            On $50,000 balance: asset based fees ={' '}
            <strong>$162.50 – $245.00/year</strong>, plus $17 →{' '}
            <strong>$179.50 – $262.00/year.</strong>
          </li>
        </ul>

        <div className="mt-8">
          <button
            onClick={() => navigate('/pricing/ira')}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            ← Back to IRA Pricing
          </button>
        </div>
      </div>
    </div>
  )
}

export default IraFeeDetailsPage
