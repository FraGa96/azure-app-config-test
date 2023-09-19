'use client'
import React, { PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react';
import { FeatureFlagType } from './featureFlags';

type FeatureFlagContextType = {
  featureFlags: FeatureFlagType[];
};
export const FeatureFlagContext = React.createContext<FeatureFlagContextType>({
  featureFlags: [],
});

type FeatureFlagsProviderProps = {
  featureFlagsData: FeatureFlagType[];
};
export const FeatureFlagsContextProvider: React.FC<PropsWithChildren<FeatureFlagsProviderProps>> = ({
  featureFlagsData = [],
  children,
}) => {
  const [featureFlags] = useState(featureFlagsData);

  return (
    <FeatureFlagContext.Provider value={{ featureFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = (featureKey: string) => {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error('Context not found');
  }
  const { featureFlags } = context;

  const featureFlag = useMemo(() => {
    return featureFlags.find((ff) => ff.id === featureKey)?.enabled || false
  }, [featureKey, featureFlags]);

  return featureFlag;
}

export const useDemoFeature = () => useFeatureFlag('DemoFeature');
export const useDemoFeature2 = () => useFeatureFlag('DemoFeature2');