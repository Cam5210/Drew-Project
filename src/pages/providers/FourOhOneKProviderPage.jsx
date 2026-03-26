import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import ascensusLogo from '../../assets/providers/Ascensus.png'
import bettermentLogo from '../../assets/providers/Betterment.png'
import empowerLogo from '../../assets/providers/Empower.png'
import principalLogo from '../../assets/providers/Principal.png'
import vestwellLogo from '../../assets/providers/Vestwell.png'
import voyaLogo from '../../assets/providers/Voya.png'

const allProviders = [
  { name: 'Principal', logo: principalLogo, description: 'Principal Financial Group is a leading provider of 401(k) plans, offering comprehensive retirement solutions with dedicated plan support and competitive pricing.' },
  { name: 'Ascensus', logo: ascensusLogo, description: 'Ascensus is a trusted retirement plan administrator offering flexible 401(k) solutions for businesses of all sizes.' },
  { name: 'Betterment', logo: bettermentLogo, description: 'Betterment at Work provides modern, easy-to-manage 401(k) plans with low fees and personalized advice.' },
  { name: 'Empower', logo: empowerLogo, description: 'Empower is one of the largest retirement plan providers in the country, offering robust plan administration and investment options.' },
  { name: 'Vestwell', logo: vestwellLogo, description: 'Vestwell delivers digital-first retirement plan solutions designed for modern businesses and their employees.' },
  { name: 'Voya', logo: voyaLogo, description: 'Voya Financial offers comprehensive retirement plan services with a focus on participant outcomes and employer simplicity.' },
]

function FourOhOneKProviderPage() {
  const navigate = useNavigate()
  const [selectedProvider, setSelectedProvider] = useState('Principal')
  const [showAlternatives, setShowAlternatives] = useState(false)

  const selected = allProviders.find((p) => p.name === selectedProvider)
  const alternatives = allProviders.filter((p) => p.name !== selectedProvider)

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
              {showAlternatives ? 'Your selected provider:' : "We've matched you with the following provider:"}
            </p>

            <div className="mt-6 flex h-24 w-56 items-center justify-center rounded-2xl border border-brand-border bg-white px-6 py-4">
              <img src={selected.logo} alt={`${selected.name} logo`} className="max-h-12 w-auto object-contain" />
            </div>

            <h3 className="mt-4 text-3xl font-bold text-brand-dark">{selected.name}</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">
              {selected.description}
            </p>

            <div className="mt-8 w-full space-y-3">
              <Button
                className="w-full px-8 py-3"
                onClick={() => navigate('/onboarding/docusign')}
              >
                Continue with selection
              </Button>

              {!showAlternatives && (
                <button
                  onClick={() => setShowAlternatives(true)}
                  className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm font-semibold text-brand-dark transition hover:border-brand-gold hover:text-brand-gold"
                >
                  Interested in a different provider? Click here
                </button>
              )}
            </div>
          </div>

          {/* Alternatives sidebar */}
          <div className={`surface-card px-6 py-8 transition-opacity ${showAlternatives ? 'opacity-100' : 'opacity-60'}`}>
            <p className="m-0 text-xs font-semibold uppercase tracking-widest text-brand-muted">
              {showAlternatives ? 'Select a provider' : 'Other providers we partner with'}
            </p>
            <div className="mt-6 space-y-4">
              {alternatives.map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => {
                    setSelectedProvider(provider.name)
                    setShowAlternatives(false)
                  }}
                  className={`flex w-full items-center justify-center rounded-lg border px-4 py-4 transition ${
                    showAlternatives
                      ? 'cursor-pointer border-brand-border hover:border-brand-gold hover:shadow-md'
                      : 'cursor-default border-brand-border'
                  }`}
                >
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-white px-2 py-1">
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-6">
          <button
            onClick={() => navigate('/pricing/401k')}
            className="text-sm font-semibold text-white/70 transition hover:text-brand-gold"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default FourOhOneKProviderPage
