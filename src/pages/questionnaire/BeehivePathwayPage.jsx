import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import { getRecommendedPlan } from '../../utils/decisionEngine'

const STEPS = [
  {
    key: 'employeeCount',
    question:
      'How many employees are part of your organization? This will help us determine the right path for you.',
    type: 'select',
    label: 'Select Number of Employees',
    options: [1, 5, 10, 15, 20, 25, 28, 30, 50, 75, 100, 150, 200, 500],
  },
  {
    key: 'wantsRetirementPlan',
    question:
      'Do you want to maximize retirement savings for you and your employees by offering a retirement plan?',
    type: 'radio',
    name: 'retirement',
  },
  {
    key: 'wantsDiscretionary',
    question:
      'Would you like the ability to reward your employees by making a discretionary contribution to their savings plan?',
    type: 'radio',
    name: 'discretionary',
  },
  {
    key: 'hasHighlyCompensated',
    question:
      'Are you or any of your employees classified as highly compensated employees under DOL guidelines, making over $150,000 per year?',
    type: 'radio',
    name: 'hce',
  },
]

function BeehivePathwayPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    employeeCount: '',
    wantsRetirementPlan: '',
    wantsDiscretionary: '',
    hasHighlyCompensated: '',
  })

  const current = STEPS[step]
  const value = answers[current.key]
  const canContinue = value !== ''
  const isLast = step === STEPS.length - 1

  const radioClass =
    'flex cursor-pointer items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm transition hover:border-brand-gold'

  const setAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [current.key]: val }))
  }

  const handleNext = () => {
    if (isLast) {
      const plan = getRecommendedPlan({
        employeeCount: Number(answers.employeeCount),
        wantsRetirementPlan: answers.wantsRetirementPlan,
        wantsDiscretionary: answers.wantsDiscretionary,
        hasHighlyCompensated: answers.hasHighlyCompensated,
      })
      navigate(`/recommendation/${plan}`)
    } else {
      setStep((s) => s + 1)
    }
  }

  const handleBack = () => {
    if (step === 0) {
      navigate('/register')
    } else {
      setStep((s) => s - 1)
    }
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

        {/* Progress bar */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {STEPS.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                  i < step
                    ? 'bg-brand-gold text-white'
                    : i === step
                      ? 'border-2 border-brand-gold bg-white text-brand-gold'
                      : 'border border-brand-border bg-white text-brand-muted'
                }`}
              >
                {i < step ? '✓' : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-0.5 w-8 rounded transition ${
                    i < step ? 'bg-brand-gold' : 'bg-brand-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <p className="mb-6 text-center text-xs font-semibold text-brand-muted">
          Question {step + 1} of {STEPS.length}
        </p>

        {/* Question card */}
        <div className="mx-auto max-w-md">
          <div className="surface-card flex flex-col p-8">
            <p className="m-0 mb-6 text-center text-base font-semibold leading-snug text-brand-dark">
              {current.question}
            </p>

            {current.type === 'select' && (
              <div>
                <label className="mb-2 text-xs font-semibold text-brand-muted">
                  {current.label}
                </label>
                <select
                  className="w-full rounded-lg border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                  value={value}
                  onChange={(e) => setAnswer(e.target.value)}
                >
                  <option value="">—</option>
                  {current.options.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {current.type === 'radio' && (
              <div className="space-y-3">
                <label
                  className={`${radioClass} ${value === 'yes' ? 'border-brand-gold bg-brand-gold/5' : ''}`}
                >
                  <input
                    type="radio"
                    name={current.name}
                    className="accent-brand-gold"
                    checked={value === 'yes'}
                    onChange={() => setAnswer('yes')}
                  />
                  Yes
                </label>
                <label
                  className={`${radioClass} ${value === 'no' ? 'border-brand-gold bg-brand-gold/5' : ''}`}
                >
                  <input
                    type="radio"
                    name={current.name}
                    className="accent-brand-gold"
                    checked={value === 'no'}
                    onChange={() => setAnswer('no')}
                  />
                  No
                </label>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={handleBack}
                className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-gold"
              >
                ← Back
              </button>

              <Button className="px-8 py-2.5" disabled={!canContinue} onClick={handleNext}>
                {isLast ? 'See Your Recommendation →' : 'Next →'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeehivePathwayPage
