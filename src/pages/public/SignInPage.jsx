import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import Logo from '../../components/common/Logo'

function SignInPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/portal')
  }

  const inputClass =
    'w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-gold focus:outline-none transition'

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80)',
      }}
    >
      <div className="surface-card w-full max-w-md px-8 py-10 text-center backdrop-blur md:px-10">
        <Logo className="mb-6 flex justify-center" imageClassName="max-w-[200px]" />

        <h1 className="m-0 text-3xl font-semibold text-brand-dark">Sign in</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
          <input
            className={inputClass}
            placeholder="Username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className={inputClass}
            placeholder="Password *"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-center">
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold">
              Forgot your password?
            </a>
          </div>

          <div className="flex justify-center pt-2">
            <Button type="submit" className="min-w-36 px-8 py-3">Sign in</Button>
          </div>

          <p className="m-0 pt-2 text-center text-sm text-brand-muted">
            New account?{' '}
            <a href="/register" className="font-semibold text-brand-dark underline hover:text-brand-gold">
              Start here.
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
