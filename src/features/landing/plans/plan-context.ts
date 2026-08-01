import { createContext, useContext } from 'react'

export interface PlanContextType {
  selectedPlan: string | null
  onSelectPlan: (value: string) => void
}

export const PlanContext = createContext<PlanContextType | null>(null)

export const usePlanContext = (): PlanContextType => {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlanContext must be used within PlanProvider')
  return ctx
}
