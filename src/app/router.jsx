import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '../components/layout/PublicLayout'
import AuthLayout from '../components/layout/AuthLayout'
import PortalLayout from '../components/layout/PortalLayout'
import LandingPage from '../pages/public/LandingPage'
import RegisterPage from '../pages/public/RegisterPage'
import SignInPage from '../pages/public/SignInPage'
import BeehivePathwayPage from '../pages/questionnaire/BeehivePathwayPage'
import IraRecommendationPage from '../pages/recommendations/IraRecommendationPage'
import FourOhOneKRecommendationPage from '../pages/recommendations/FourOhOneKRecommendationPage'
import IraPricingPage from '../pages/pricing/IraPricingPage'
import IraFeeDetailsPage from '../pages/pricing/IraFeeDetailsPage'
import FourOhOneKPricingPage from '../pages/pricing/FourOhOneKPricingPage'
import TaxCreditCalculatorPage from '../pages/pricing/TaxCreditCalculatorPage'
import IraProviderPage from '../pages/providers/IraProviderPage'
import FourOhOneKProviderPage from '../pages/providers/FourOhOneKProviderPage'
import DocusignPage from '../pages/onboarding/DocusignPage'
import DocumentSignedPage from '../pages/onboarding/DocumentSignedPage'
import DashboardPage from '../pages/portal/DashboardPage'

function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/beehive-pathway" element={<BeehivePathwayPage />} />
        <Route path="/recommendation/ira" element={<IraRecommendationPage />} />
        <Route path="/recommendation/401k" element={<FourOhOneKRecommendationPage />} />
        <Route path="/pricing/ira" element={<IraPricingPage />} />
        <Route path="/pricing/ira-fees" element={<IraFeeDetailsPage />} />
        <Route path="/pricing/401k" element={<FourOhOneKPricingPage />} />
        <Route path="/pricing/tax-credit" element={<TaxCreditCalculatorPage />} />
        <Route path="/providers/ira" element={<IraProviderPage />} />
        <Route path="/providers/401k" element={<FourOhOneKProviderPage />} />
        <Route path="/onboarding/docusign" element={<DocusignPage />} />
        <Route path="/onboarding/signed" element={<DocumentSignedPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>

      <Route element={<PortalLayout />}>
        <Route path="/portal" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
