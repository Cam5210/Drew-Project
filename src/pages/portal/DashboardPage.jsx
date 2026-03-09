import Card from '../../components/common/Card'
import { dashboardData } from '../../data/dashboard'
import { ClipboardList, FolderLock, TrendingUp, Scale, Play, Search, User } from 'lucide-react'

const iconMap = { ClipboardList, FolderLock, TrendingUp, Scale }

function DashboardPage() {
  const d = dashboardData

  return (
    <section className="space-y-8">
      {/* Authenticated nav bar */}
      <div className="flex items-center justify-between rounded-card bg-brand-dark px-6 py-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-white">Utah Saves</span>
          {['Home', 'My Plan', 'Retirement Plan Management', 'Education', 'Support'].map(
            (item) => (
              <button
                key={item}
                className="hidden text-xs font-medium text-white/70 transition hover:text-brand-gold lg:inline"
              >
                {item}
              </button>
            ),
          )}
        </div>
        <div className="flex items-center gap-4">
          <Search className="h-4 w-4 text-white/60" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
              B
            </div>
            <span className="hidden text-xs font-medium text-white/80 sm:inline">Bernard</span>
          </div>
        </div>
      </div>

      {/* Welcome banner */}
      <div className="rounded-card bg-gradient-to-r from-brand-dark to-brand-dark/90 px-8 py-8 text-white">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Welcome back, Bernard
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Your Dashboard</h1>
      </div>

      {/* Status row */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="surface-card px-5 py-4">
          <p className="m-0 text-xs font-semibold uppercase text-brand-muted">Plan Type</p>
          <p className="m-0 mt-1 text-lg font-bold text-brand-dark">{d.planType}</p>
        </div>
        <div className="surface-card px-5 py-4">
          <p className="m-0 text-xs font-semibold uppercase text-brand-muted">Provider</p>
          <p className="m-0 mt-1 text-lg font-bold text-brand-dark">{d.provider}</p>
        </div>
        <div className="surface-card px-5 py-4">
          <p className="m-0 text-xs font-semibold uppercase text-brand-muted">Status</p>
          <p className="m-0 mt-1 text-lg font-bold text-green-600">{d.status}</p>
        </div>
        <div className="surface-card px-5 py-4">
          <p className="m-0 text-xs font-semibold uppercase text-brand-muted">Enrolled</p>
          <p className="m-0 mt-1 text-lg font-bold text-brand-dark">
            {d.enrolledEmployees} / {d.totalEmployees}
          </p>
        </div>
      </div>

      {/* Feature cards with icons */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {d.cards.map((card) => {
          const Icon = iconMap[card.icon]
          return (
            <Card key={card.title} className="flex flex-col p-6">
              {Icon && (
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10">
                  <Icon className="h-5 w-5 text-brand-gold" />
                </div>
              )}
              <h3 className="m-0 text-base font-semibold text-brand-dark">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm text-brand-muted">{card.description}</p>
              <button className="mt-4 self-start text-sm font-semibold text-brand-gold transition hover:text-brand-dark">
                View →
              </button>
            </Card>
          )
        })}
      </div>

      {/* Gold divider */}
      <div className="h-px bg-brand-gold/40" />

      {/* Video Library */}
      <div>
        <h2 className="m-0 text-xl font-semibold text-brand-dark">Video Library</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {d.videos.map((video) => (
            <div key={video.title} className="surface-card overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <Play className="ml-1 h-6 w-6 text-brand-dark" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="m-0 text-sm font-semibold text-brand-dark">{video.title}</h3>
                <p className="mt-1 text-xs text-brand-muted">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
