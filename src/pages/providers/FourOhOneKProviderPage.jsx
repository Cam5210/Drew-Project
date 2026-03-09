import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import ascensusLogo from '../../assets/providers/Ascensus.png'
import bettermentLogo from '../../assets/providers/Betterment.png'
import empowerLogo from '../../assets/providers/Empower.png'
import principalLogo from '../../assets/providers/Principal.png'
import vestwellLogo from '../../assets/providers/Vestwell.png'
import voyaLogo from '../../assets/providers/Voya.png'

const alternatives = [
  { name: 'Ascensus', logo: ascensusLogo },
  { name: 'Betterment', logo: bettermentLogo },
  { name: 'Empower', logo: empowerLogo },
  { name: 'Vestwell', logo: vestwellLogo },
  { name: 'Voya', logo: voyaLogo },
]

function FourOhOneKProviderPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="mx-auto max-w-4xl">
        <h2 className="m-0 text-center text-2xl font-semibold text-white">
          Your 401(k) Provider Match
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
          {/* Primary match */}
          <div className="surface-card flex flex-col items-center px-10 py-10 text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              We&apos;ve matched you with the following provider:
            </p>

            <div className="mt-6 flex h-24 w-56 items-center justify-center rounded-2xl border border-brand-border bg-white px-6 py-4">
              <img src={principalLogo} alt="Principal logo" className="max-h-12 w-auto object-contain" />
            </div>

            <h3 className="mt-4 text-3xl font-bold text-brand-dark">Principal</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">
              Principal Financial Group is a leading provider of 401(k) plans, offering
              comprehensive retirement solutions with dedicated plan support and competitive
              pricing.
            </p>

            <div className="mt-8 w-full">
              <Button
                className="w-full px-8 py-3"
                onClick={() => navigate('/onboarding/docusign')}
              >
                Continue with selection
              </Button>
            </div>
          </div>

          {/* Alternatives sidebar */}
          <div className="surface-card px-6 py-8">
            <p className="m-0 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Other providers we partner with
            </p>
            <div className="mt-6 space-y-4">
              {alternatives.map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-center justify-center rounded-lg border border-brand-border px-4 py-4 transition hover:border-brand-gold"
                >
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-white px-2 py-1">
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourOhOneKProviderPage
