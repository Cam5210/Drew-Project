import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import Logo from '../../components/common/Logo'

function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    companyName: '',
    companyAddress: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactAddress: '',
  })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/beehive-pathway')
  }

  const inputClass =
    'w-full border-b border-brand-border bg-transparent px-1 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-gold focus:outline-none transition'

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        <Logo className="mb-8 flex justify-center" imageClassName="max-w-[220px]" />

        <div className="surface-card px-8 py-10 md:px-10">
          <div className="mb-8 text-center">
            <h1 className="m-0 text-2xl font-semibold text-brand-dark">
              Let&apos;s get to know you.
            </h1>
            <p className="mt-2 text-sm text-brand-muted">
              Start by adding some basic information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} value={form.companyName} onChange={update('companyName')} required />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Company Address <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} value={form.companyAddress} onChange={update('companyAddress')} required />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} value={form.contactName} onChange={update('contactName')} required />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Contact Email Address <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} type="email" value={form.contactEmail} onChange={update('contactEmail')} required />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Contact Phone Number <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} type="tel" value={form.contactPhone} onChange={update('contactPhone')} required />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-brand-dark">
                Contact Address <span className="text-red-500">*</span>
              </label>
              <input className={inputClass} value={form.contactAddress} onChange={update('contactAddress')} required />
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="px-10 py-3">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
