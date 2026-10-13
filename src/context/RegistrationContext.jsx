import { createContext, useContext } from 'react';
import { useRegistrations } from '../hooks/useRegistrations';

const RegistrationContext = createContext(null);

export function RegistrationProvider({ children }) {
  const registrations = useRegistrations();
  return <RegistrationContext.Provider value={registrations}>{children}</RegistrationContext.Provider>;
}

export function useRegistrationContext() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) throw new Error('useRegistrationContext harus dipakai di dalam RegistrationProvider');
  return ctx;
}
