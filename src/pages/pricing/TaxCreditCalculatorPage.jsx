import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'

const scenarios = [
  { employees: 10, hces: 1, eligible: 8, autoEnroll: true },
  { employees: 25, hces: 2, eligible: 20, autoEnroll: true },
  { employees: 50, hces: 5, eligible: 40, autoEnroll: false },
  { employees: 100, hces: 10, eligible: 75, autoEnroll: true },
]

function computeCredits(s) {
  const nonHce = s.employees - s.hces
  const startup = Math.min(5000, Math.max(500, nonHce * 250))
  const autoEnrollBonus = s.autoEnroll ? Math.min(500, nonHce * 50) : 0
  const contribution = Math.min(s.eligible, nonHce) * 1000
  const year1to3 = startup + autoEnrollBonus + contribution
  const year4to5 = contribution
  return { startup, autoEnrollBonus, contribution, year1to3, year4to5, total5yr: year1to3 * 3 + year4to5 * 2 }
}

const fmt = (v) => `$${Number(v).toLocaleString()}`

function TaxCreditCalculatorPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark px-6 py-16">
      <div className="surface-card mx-auto max-w-3xl px-8 py-10 md:px-12">
        <Logo className="mb-6 flex justify-center" imageClassName="max-w-[220px]" />
        <h2 className="m-0 text-xl font-bold text-brand-dark">Available Tax Credits</h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          Small businesses may be eligible for significant federal tax credits when starting a new
          401(k) plan. Below are estimated credits based on common company profiles.
        </p>

        {/* Credit overview */}
        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-brand-border px-6 py-4">
            <h3 className="m-0 text-sm font-bold text-brand-dark">Start-Up Tax Credit</h3>
            <p className="mt-1 text-sm text-brand-muted">
              Up to <strong>$5,000 per year</strong> for the first 3 years. Calculated as $250 per
              non-HCE employee (minimum $500).
            </p>
          </div>
          <div className="rounded-xl border border-brand-border px-6 py-4">
            <h3 className="m-0 text-sm font-bold text-brand-dark">Auto-Enrollment Credit</h3>
            <p className="mt-1 text-sm text-brand-muted">
              Up to <strong>$500 per year</strong> for the first 3 years when automatic enrollment
              is enabled.
            </p>
          </div>
          <div className="rounded-xl border border-brand-border px-6 py-4">
            <h3 className="m-0 text-sm font-bold text-brand-dark">
              Employer Contribution Credit
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              Up to <strong>$1,000 per eligible employee per year</strong> for the first 5 years.
              Applies to employees earning under $69,000.
            </p>
          </div>
        </div>

        {/* Example scenarios table */}
        <div className="mt-10 rounded-xl border-2 border-brand-gold bg-brand-gold/5 p-6">
          <h3 className="m-0 text-lg font-bold text-brand-dark">
            Estimated Tax Credits by Company Size
          </h3>
          <p className="mt-1 text-xs text-brand-muted">
            These are estimates only. Actual credits depend on your specific plan design and
            employee demographics. *
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="pb-2 pr-4 text-xs font-semibold text-brand-muted">Employees</th>
                  <th className="pb-2 pr-4 text-xs font-semibold text-brand-muted">
                    Start-Up Credit
                  </th>
                  <th className="pb-2 pr-4 text-xs font-semibold text-brand-muted">
                    Contribution Credit
                  </th>
                  <th className="pb-2 pr-4 text-xs font-semibold text-brand-muted">
                    Per Year (Yr 1–3)
                  </th>
                  <th className="pb-2 text-xs font-semibold text-brand-muted">
                    5-Year Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s) => {
                  const c = computeCredits(s)
                  return (
                    <tr key={s.employees} className="border-b border-brand-border/50">
                      <td className="py-3 pr-4 font-semibold text-brand-dark">{s.employees}</td>
                      <td className="py-3 pr-4 text-brand-dark">{fmt(c.startup)}</td>
                      <td className="py-3 pr-4 text-brand-dark">{fmt(c.contribution)}</td>
                      <td className="py-3 pr-4 font-semibold text-brand-dark">{fmt(c.year1to3)}</td>
                      <td className="py-3 font-bold text-brand-gold">{fmt(c.total5yr)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/pricing/401k')}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
          >
            ← Back to 401(k) Pricing
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaxCreditCalculatorPage
