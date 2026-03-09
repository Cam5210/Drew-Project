export function getRecommendedPlan(answers) {
  const { employeeCount, wantsRetirementPlan, wantsDiscretionary, hasHighlyCompensated } = answers

  if (wantsRetirementPlan === 'yes' && wantsDiscretionary === 'yes') return '401k'
  if (hasHighlyCompensated === 'yes') return '401k'
  if (employeeCount > 50 && wantsRetirementPlan === 'yes') return '401k'

  return 'ira'
}
