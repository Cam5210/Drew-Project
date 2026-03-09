import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'

function FourOhOneKRecommendationPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      <div className="surface-card w-full max-w-lg px-8 py-10 text-center md:px-12">
        <h1 className="m-0 text-2xl font-semibold leading-snug text-brand-dark">
          Based on your inputs, a{' '}
          <span className="text-brand-gold">401(k) Plan</span> is the best option for you.
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-brand-muted">
          A 401(k) Plan gives your company a proven, flexible way to support employees&apos;
          futures while strengthening your benefits package.
        </p>

        <p className="mt-6 text-sm font-bold text-brand-dark">Continue with 401(k) Plan</p>

        <div className="mt-4">
          <Button className="px-10 py-3" onClick={() => navigate('/pricing/401k')}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FourOhOneKRecommendationPage
