import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import vestwellLogo from '../../assets/providers/Vestwell.png'

function IraProviderPage() {
  const navigate = useNavigate()
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark px-6 py-16">
      <div className="mx-auto max-w-lg text-center">
        {/* THE HIVE branding card */}
        <div className="surface-card mt-8 px-8 py-10 md:px-12">
          <Logo className="mb-6 flex justify-center" imageClassName="max-w-[220px]" />
          <h2 className="m-0 mb-6 text-2xl font-semibold text-brand-dark">
            Welcome to Utah&apos;s Auto-IRA
          </h2>
          <div className="mx-auto flex h-24 w-48 items-center justify-center rounded-2xl border border-brand-border bg-white px-4 py-3">
            <img src={vestwellLogo} alt="Vestwell logo" className="max-h-12 w-auto object-contain" />
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-wide text-brand-dark">THE HIVE</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Utah&apos;s state-facilitated Auto-IRA program, powered by a trusted provider
            network. Simple, compliant, and no cost to employers.
          </p>

          {/* Confirmation checkbox */}
          <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-lg border border-brand-border px-5 py-4 text-left transition hover:border-brand-gold">
            <input
              type="checkbox"
              className="mt-1 accent-brand-gold"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <span className="text-sm leading-relaxed text-brand-dark">
              <strong>Select to Confirm IRA</strong> — Confirm that you wish to move forward
              with <strong>THE HIVE</strong> as your selected IRA provider.
            </span>
          </label>

          <div className="mt-8">
            <Button
              className="w-full px-8 py-3"
              disabled={!confirmed}
              onClick={() => navigate('/onboarding/docusign')}
            >
              Continue with selection
            </Button>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate('/pricing/ira')}
            className="text-sm font-semibold text-white/70 transition hover:text-brand-gold"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate('/recommendation/401k')}
            className="text-sm font-semibold text-white/70 transition hover:text-brand-gold"
          >
            401(k) →
          </button>
        </div>
      </div>
    </div>
  )
}

export default IraProviderPage
