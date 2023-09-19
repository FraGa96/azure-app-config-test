import { AppConfigurationClient } from '@azure/app-configuration';
import { PropsWithChildren } from 'react';
import { FeatureFlagsContextProvider } from './useFeatureFlagsContext';

const azureAccessKey = process.env.AZURE_CONFIG_ACCESS_KEY || '';
const client = new AppConfigurationClient(azureAccessKey);

export const getFeatureFlagStatus = async (flagKey: string) => {
  let enabled = false;
  if (!flagKey || !flagKey.toString().trim().length) {
    throw new Error ('Invalid flag key');
  } else {
    try {
      const result = await client.getConfigurationSetting({
        key: `.appconfig.featureflag/${flagKey.toString().trim()}`,
      });

      if (result && typeof result === 'object') {
        enabled = JSON.parse(result.value!).enabled;
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
    return enabled;
  }
}

export type FeatureFlagType = {
  id: string;
  enabled: boolean;
};

export const getAllFeatureFlags = async () => {
  try {
    const result = client.listConfigurationSettings();
    const featureFlags: FeatureFlagType[] = [];

    for await (const setting of result) {
      const data: FeatureFlagType = JSON.parse(setting.value!);
      featureFlags.push({
        id: data.id,
        enabled: data.enabled
      });
    }
    return featureFlags;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
  return [];
}

export const useDemoFeatureServer = async () => {
  return await getFeatureFlagStatus('DemoFeature');
}

export const FeatureFlagsProvider: React.FC<PropsWithChildren> = async ({ children }) => {
  const featureFlags = await getAllFeatureFlags();

  return (
    <FeatureFlagsContextProvider featureFlagsData={featureFlags}>
      {children}
    </FeatureFlagsContextProvider>
  );
};

