import React from 'react';
import { FeatureFlagsProvider } from '@/lib/featureFlags';

export default async function ContextPage({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagsProvider>
      {children}
    </FeatureFlagsProvider>
  );
}
