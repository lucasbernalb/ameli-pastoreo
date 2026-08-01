import { useState, type ReactNode } from 'react'
import { PlanContext } from './plan-context'

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <PlanContext.Provider value={{ selectedPlan, onSelectPlan: setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  )
}
