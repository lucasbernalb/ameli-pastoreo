import { createContext, useContext, useState, type ReactNode } from 'react';

interface PlanContextType {
  selectedPlan: string | null;
  onSelectPlan: (value: string) => void;
}

const PlanContext = createContext<PlanContextType | null>(null);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <PlanContext.Provider value={{ selectedPlan, onSelectPlan: setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlanContext = (): PlanContextType => {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlanContext must be used within PlanProvider');
  return ctx;
};
