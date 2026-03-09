import { useState, useMemo } from 'react'
import Logo from '../../components/common/Logo'
import { calculateTaxCredit } from '../../utils/taxCredit'

function TaxCreditCalculatorPage() {
  const [totalEmployees, setTotalEmployees] = useState('')
  const [hceCount, setHceCount] = useState('')
  const [eligibleCount, setEligibleCount] = useState('')
  const [autoEnroll, setAutoEnroll] = useState(null)

  const canCalculate =
    totalEmployees !== '' && hceCount !== '' && eligibleCount !== '' && autoEnroll !== null

  const result = useMemo(() => {
    if (!canCalculate) return null
    return calculateTaxCredit({
      totalEmployees: Number(totalEmployees),
      hceCount: Number(hceCount),
      eligibleCount: Number(eligibleCount),
      autoEnroll,
    })
  }, [totalEmployees, hceCount, eligibleCount, autoEnroll, canCalculate])

  const fmt = (v) => `$${Number(v).toLocaleString()}`

  const inputClass =
    'w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark focus:border-brand-gold focus:outline-none transition'
  const readonlyClass =
    'w-full rounded-lg border border-brand-border bg-brand-light px-4 py-3 text-sm text-brand-dark'

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card mx-auto max-w-2xl px-8 py-10 md:px-12">
        <h2 className="m-0 text-xl font-bold text-brand-dark">Tax Credit Calculator</h2>

        <div className="mt-6 space-y-5">
          <div>
            <label className="mb-1 block text-xs font-semibold text-brand-dark">
              Total Number of Employees *
            </label>
            <input
              className={inputClass}
              type="number"
              min="0"
              value={totalEmployees}
              onChange={(e) => setTotalEmployees(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-brand-dark">
              Number of Highly Compensated Employees (HCEs) *
            </label>
            <input
              className={inputClass}
              type="number"
              min="0"
              value={hceCount}
              onChange={(e) => setHceCount(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-brand-dark">
              Number of Employees Who Earned Under $69,000 During Tax Prior Year *
            </label>
            <input
              className={inputClass}
              type="number"
              min="0"
              value={eligibleCount}
              onChange={(e) => setEligibleCount(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-brand-dark">
              Automatic Enrollment
            </label>
            <div className="flex gap-6">
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="autoEnroll"
                  className="accent-brand-gold"
                  checked={autoEnroll === true}
                  onChange={() => setAutoEnroll(true)}
                />
                Yes
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="autoEnroll"
                  className="accent-brand-gold"
                  checked={autoEnroll === false}
                  onChange={() => setAutoEnroll(false)}
                />
                No
              </label>
            </div>
          </div>

          {result && (
            <>
              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-dark">
                  Estimated Start-Up Tax Credit
                </label>
                <div className={readonlyClass}>{fmt(result.startupCredit)}</div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-dark">
                  Estimated Employer Contribution Tax Credit ($1,000 Max per Employee)
                </label>
                <div className={readonlyClass}>{fmt(result.contributionCredit)}</div>
              </div>

              <div className="mt-8 rounded-xl border-2 border-brand-gold bg-brand-gold/5 p-6">
                <h3 className="m-0 text-lg font-bold text-brand-dark">
                  Total Estimated Tax Credit Available By Year
                </h3>
                <p className="mt-1 text-xs text-brand-muted">
                  These are ONLY estimates. Please see the information below for more details. *
                </p>

                <div className="mt-4 space-y-3">
                  {result.years.map((val, i) => (
                    <div key={i}>
                      <label className="mb-1 block text-xs font-semibold text-brand-muted">
                        Total Estimated Tax Credit Year {i + 1}
                      </label>
                      <div className={readonlyClass}>{fmt(val)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaxCreditCalculatorPage
