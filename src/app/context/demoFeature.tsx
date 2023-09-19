'use client'
import { useState } from 'react';
import { useDemoFeature } from '@/lib/useFeatureFlagsContext';
import DemoFeature2 from './demoFeature2';

export default function DemoFeature() {
  const [count, setCount] = useState<number>(0);
  const demoFeature = useDemoFeature();

  function handleClick() {
    setCount((prevCount: number) => prevCount + 1);
  }

  return (
    <div>
      {demoFeature ? 'This is DemoFeature' : 'If you see this, DemoFeature is off'}
      <button onClick={handleClick}>Click here to update state</button>

      <DemoFeature2 />
    </div>
  );
}
