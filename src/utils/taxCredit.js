export function calculateTaxCredit({
  totalEmployees,
  hceCount,
  eligibleCount,
  autoEnroll,
}) {
  const nonHceCount = Math.max(0, totalEmployees - hceCount)
  const startupBase = Math.min(5000, Math.max(500, nonHceCount * 250))
  const startupCredit = startupBase
  const autoEnrollCredit = autoEnroll ? Math.min(500, nonHceCount * 50) : 0
  const contributionCredit = Math.min(eligibleCount, nonHceCount) * 1000

  const years = []
  for (let y = 1; y <= 5; y++) {
    const startup = y <= 3 ? startupCredit + autoEnrollCredit : 0
    const contrib = contributionCredit
    years.push(startup + contrib)
  }

  return {
    startupCredit,
    autoEnrollCredit,
    contributionCredit,
    years,
  }
}
