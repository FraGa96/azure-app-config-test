'use client'
import { useDemoFeature2 } from '@/lib/useFeatureFlagsContext';

export default function DemoFeature() {
  const demoFeature2 = useDemoFeature2();

  return (
    <div>
      {demoFeature2 ? 'This is DemoFeature2' : 'If you see this, DemoFeature2 is off'}
    </div>
  );
}
