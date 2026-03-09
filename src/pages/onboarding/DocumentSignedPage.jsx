import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import { CheckCircle2, Download, Mail, Share2, X } from 'lucide-react'

function DocumentSignedPage() {
  const navigate = useNavigate()

  return (
    <div className="relative flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-brand-dark px-6 py-16">
      <Logo className="mb-10 flex justify-center" imageClassName="max-w-[220px]" />

      {/* Background card (continue destination) */}
      <div className="surface-card w-full max-w-lg px-8 py-12 text-center opacity-30 md:px-12">
        <p className="text-sm text-brand-muted">Your onboarding is complete.</p>
        <Button className="mt-4 px-10 py-3" onClick={() => navigate('/portal')}>
          Continue →
        </Button>
      </div>

      {/* Success modal overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-md animate-fade-in rounded-card bg-white px-8 py-10 text-center shadow-2xl md:px-12">
          <button
            onClick={() => navigate('/portal')}
            className="absolute right-4 top-4 rounded-full p-1 text-brand-muted transition hover:bg-brand-light hover:text-brand-dark"
          >
            <X className="h-5 w-5" />
          </button>

          <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" strokeWidth={1.5} />

          <h2 className="mt-5 text-2xl font-bold text-brand-dark">
            Document Signed Successfully!
          </h2>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-brand-muted">
            Your Letter of Understanding has been signed and submitted. A copy has been sent to
            your email on file.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="flex flex-col items-center gap-1.5 rounded-lg px-4 py-3 text-brand-dark transition hover:bg-brand-light">
              <Download className="h-5 w-5" />
              <span className="text-xs font-medium">Save</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 rounded-lg px-4 py-3 text-brand-dark transition hover:bg-brand-light">
              <Mail className="h-5 w-5" />
              <span className="text-xs font-medium">Email</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 rounded-lg px-4 py-3 text-brand-dark transition hover:bg-brand-light">
              <Share2 className="h-5 w-5" />
              <span className="text-xs font-medium">Share</span>
            </button>
          </div>

          <div className="mt-6">
            <Button className="w-full px-10 py-3" onClick={() => navigate('/portal')}>
              Go to My Portal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentSignedPage
