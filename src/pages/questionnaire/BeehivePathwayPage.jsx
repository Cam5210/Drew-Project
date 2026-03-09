import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import { getRecommendedPlan } from '../../utils/decisionEngine'

function BeehivePathwayPage() {
  const navigate = useNavigate()
  const [employeeCount, setEmployeeCount] = useState('')
  const [wantsRetirementPlan, setWantsRetirementPlan] = useState('')
  const [wantsDiscretionary, setWantsDiscretionary] = useState('')
  const [hasHighlyCompensated, setHasHighlyCompensated] = useState('')

  const radioClass =
    'flex cursor-pointer items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm transition hover:border-brand-gold'

  const handleContinue = (setter, value) => {
    setter(value)
  }

  const allAnswered =
    employeeCount !== '' &&
    wantsRetirementPlan !== '' &&
    wantsDiscretionary !== '' &&
    hasHighlyCompensated !== ''

  const handleSubmit = () => {
    const plan = getRecommendedPlan({
      employeeCount: Number(employeeCount),
      wantsRetirementPlan,
      wantsDiscretionary,
      hasHighlyCompensated,
    })
    navigate(`/recommendation/${plan}`)
  }

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-light">
      <div className="mx-auto max-w-content px-6 py-10 md:px-10">
        <Logo className="mb-8 flex justify-center" imageClassName="max-w-[220px]" />

        {/* Explanation banner */}
        <div className="mb-10 rounded-2xl border border-brand-border bg-white px-6 py-6 text-center shadow-sm">
          <p className="m-0 text-lg leading-relaxed text-brand-dark md:text-xl">
            Employers start with{' '}
            <em className="font-semibold text-brand-dark">the Beehive Pathway</em>: a simple
            web-based questionnaire that guides them to the appropriate retirement solution:{' '}
            <strong>Auto-IRA or 401(k).</strong>
          </p>
        </div>

        {/* 4 Question Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Q1 — Employee count */}
          <div className="surface-card flex flex-col p-6">
            <p className="m-0 mb-4 text-center text-sm font-semibold leading-snug text-brand-dark">
              How many employees are part of your organization? This will help us determine the
              right path for you.
            </p>
            <label className="mb-2 text-xs font-semibold text-brand-muted">
              Select Number of Employees
            </label>
            <select
              className="rounded-lg border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
            >
              <option value="">—</option>
              {[1, 5, 10, 15, 20, 25, 28, 30, 50, 75, 100, 150, 200, 500].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <div className="mt-auto pt-4">
              <Button
                className="w-full gap-1"
                disabled={!employeeCount}
                onClick={() => {}}
              >
                Continue →
              </Button>
            </div>
          </div>

          {/* Q2 — Retirement plan */}
          <div className="surface-card flex flex-col p-6">
            <p className="m-0 mb-4 text-center text-sm font-semibold leading-snug text-brand-dark">
              Do you want to maximize retirement savings for you and your employees by offering a
              retirement plan?
            </p>
            <div className="space-y-3">
              <label className={`${radioClass} ${wantsRetirementPlan === 'yes' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="retirement"
                  className="accent-brand-gold"
                  checked={wantsRetirementPlan === 'yes'}
                  onChange={() => handleContinue(setWantsRetirementPlan, 'yes')}
                />
                Yes
              </label>
              <label className={`${radioClass} ${wantsRetirementPlan === 'no' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="retirement"
                  className="accent-brand-gold"
                  checked={wantsRetirementPlan === 'no'}
                  onChange={() => handleContinue(setWantsRetirementPlan, 'no')}
                />
                No
              </label>
            </div>
            <div className="mt-auto pt-4">
              <Button className="w-full gap-1" disabled={!wantsRetirementPlan} onClick={() => {}}>
                Continue →
              </Button>
            </div>
          </div>

          {/* Q3 — Discretionary contribution */}
          <div className="surface-card flex flex-col p-6">
            <p className="m-0 mb-4 text-center text-sm font-semibold leading-snug text-brand-dark">
              Would you like the ability to reward your employees by making a discretionary
              contribution to their savings plan?
            </p>
            <div className="space-y-3">
              <label className={`${radioClass} ${wantsDiscretionary === 'yes' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="discretionary"
                  className="accent-brand-gold"
                  checked={wantsDiscretionary === 'yes'}
                  onChange={() => handleContinue(setWantsDiscretionary, 'yes')}
                />
                Yes
              </label>
              <label className={`${radioClass} ${wantsDiscretionary === 'no' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="discretionary"
                  className="accent-brand-gold"
                  checked={wantsDiscretionary === 'no'}
                  onChange={() => handleContinue(setWantsDiscretionary, 'no')}
                />
                No
              </label>
            </div>
            <div className="mt-auto pt-4">
              <Button className="w-full gap-1" disabled={!wantsDiscretionary} onClick={() => {}}>
                Continue →
              </Button>
            </div>
          </div>

          {/* Q4 — Highly compensated */}
          <div className="surface-card flex flex-col p-6">
            <p className="m-0 mb-4 text-center text-sm font-semibold leading-snug text-brand-dark">
              Are you or any of your employees classified as highly compensated employees under DOL
              guidelines, making over $150,000 per year?
            </p>
            <div className="space-y-3">
              <label className={`${radioClass} ${hasHighlyCompensated === 'yes' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="hce"
                  className="accent-brand-gold"
                  checked={hasHighlyCompensated === 'yes'}
                  onChange={() => handleContinue(setHasHighlyCompensated, 'yes')}
                />
                Yes
              </label>
              <label className={`${radioClass} ${hasHighlyCompensated === 'no' ? 'border-brand-gold bg-brand-gold/5' : ''}`}>
                <input
                  type="radio"
                  name="hce"
                  className="accent-brand-gold"
                  checked={hasHighlyCompensated === 'no'}
                  onChange={() => handleContinue(setHasHighlyCompensated, 'no')}
                />
                No
              </label>
            </div>
            <div className="mt-auto pt-4">
              <Button className="w-full gap-1" disabled={!hasHighlyCompensated} onClick={() => {}}>
                Continue →
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom navigation + Submit */}
        <div className="mt-8 flex items-center justify-between">
          <span className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark">
            ← IRA
          </span>

          {allAnswered && (
            <Button className="px-10 py-3 text-base" onClick={handleSubmit}>
              See Your Recommendation →
            </Button>
          )}

          <span className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark">
            401(k) →
          </span>
        </div>
      </div>
    </div>
  )
}

export default BeehivePathwayPage
