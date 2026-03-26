import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/Button'
import { FileText, Type, PenLine, Building, CalendarDays } from 'lucide-react'

const documents = [
  { id: 1, name: 'Letter of Understanding', pages: 3 },
  { id: 2, name: 'Plan Adoption Agreement', pages: 5 },
  { id: 3, name: 'Fee Disclosure', pages: 2 },
]

const tools = [
  { icon: Type, label: 'Text Field' },
  { icon: PenLine, label: 'Initials' },
  { icon: PenLine, label: 'Add Signature' },
  { icon: Building, label: 'Company Title' },
  { icon: CalendarDays, label: 'Add Date' },
]

function DocusignPage() {
  const navigate = useNavigate()
  const [activeDoc, setActiveDoc] = useState(1)
  const [fullName, setFullName] = useState('')
  const [signDate, setSignDate] = useState('')
  const [signed, setSigned] = useState(false)

  const canSubmit = fullName.trim() !== '' && signDate !== '' && signed

  return (
    <div className="min-h-[calc(100vh-140px)] bg-brand-dark">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-brand-gold hover:text-brand-gold"
        >
          ← Back
        </button>
        <div className="rounded-lg bg-white px-4 py-2">
          <Logo className="flex justify-center" imageClassName="max-w-[140px]" />
        </div>
        <div className="w-16" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-[200px_1fr_200px]">
        {/* Left sidebar — document list */}
        <div className="border-r border-white/10 px-4 py-6">
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-white/50">
            Documents
          </p>
          <div className="mt-4 space-y-2">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveDoc(doc.id)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-medium transition ${
                  activeDoc === doc.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <FileText className="h-4 w-4 shrink-0" />
                <span className="truncate">{doc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center — document preview */}
        <div className="px-6 py-6">
          <div className="surface-card mx-auto max-h-[520px] overflow-y-auto px-10 py-8 text-sm leading-relaxed text-brand-dark">
            <p className="text-center text-lg font-bold tracking-wide">
              LETTER OF UNDERSTANDING
            </p>
            <p className="mt-1 text-center text-xs text-brand-muted">
              Utah Saves Retirement Program
            </p>

            <hr className="my-6 border-brand-border" />

            <p className="mt-4">
              This Letter of Understanding (&ldquo;LOU&rdquo;) is entered into between the
              undersigned Employer (&ldquo;Employer&rdquo;) and the Utah Saves Retirement Program
              (&ldquo;Program&rdquo;). By signing this LOU, Employer acknowledges and agrees to the
              following:
            </p>

            <h4 className="mt-6 font-bold">1. Program Participation</h4>
            <p className="mt-2">
              Employer agrees to participate in the Program and facilitate payroll deductions for
              all eligible employees as required by applicable state law.
            </p>

            <h4 className="mt-6 font-bold">2. Employer Responsibilities</h4>
            <p className="mt-2">
              Employer shall provide required employee information, integrate payroll deductions
              within 30 days of enrollment, and distribute program materials to eligible employees.
            </p>

            <h4 className="mt-6 font-bold">3. Fiduciary Status</h4>
            <p className="mt-2">
              Employer understands that participation in the Program does not create a fiduciary
              relationship between Employer and the Program or its service providers.
            </p>

            <h4 className="mt-6 font-bold">4. Compliance</h4>
            <p className="mt-2">
              Employer will comply with all applicable federal and state laws governing retirement
              savings programs, including timely remittance of employee contributions.
            </p>

            <h4 className="mt-6 font-bold">5. Program Support</h4>
            <p className="mt-2">
              The Program will provide onboarding support, training resources, and ongoing
              assistance to help Employer and its employees.
            </p>

            <h4 className="mt-6 font-bold">6. Termination</h4>
            <p className="mt-2">
              Either party may terminate participation with 30 days written notice. Employer
              remains responsible for remitting any outstanding employee contributions upon
              termination.
            </p>

            <p className="mt-8 text-xs text-brand-muted">
              This is a demo document for prototype purposes only.
            </p>
          </div>

          {/* Signature area */}
          <div className="surface-card mt-4 px-8 py-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-dark">
                  Full Name
                </label>
                <input
                  className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-dark">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                  value={signDate}
                  onChange={(e) => setSignDate(e.target.value)}
                />
              </div>
            </div>

            <label className="mt-4 flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                className="accent-brand-gold"
                checked={signed}
                onChange={(e) => setSigned(e.target.checked)}
              />
              <span className="text-sm text-brand-dark">
                Click here to e-sign — I agree this constitutes my electronic signature.
              </span>
            </label>

            <div className="mt-6 flex items-center justify-between">
              <button
                className="rounded-lg border-2 border-brand-gold bg-brand-gold/10 px-5 py-2 text-sm font-bold text-brand-dark transition hover:bg-brand-gold/20"
                onClick={() => setSigned(true)}
              >
                Sign Here
              </button>

              <Button
                className="px-10 py-3"
                disabled={!canSubmit}
                onClick={() => navigate('/onboarding/signed')}
              >
                Continue →
              </Button>
            </div>
          </div>
        </div>

        {/* Right sidebar — tools */}
        <div className="border-l border-white/10 px-4 py-6">
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-white/50">
            Tools
          </p>
          <div className="mt-4 space-y-2">
            {tools.map((tool) => (
              <button
                key={tool.label}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                <tool.icon className="h-4 w-4 shrink-0" />
                {tool.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocusignPage
