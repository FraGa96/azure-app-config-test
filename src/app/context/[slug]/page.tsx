'use client'
import { useDemoFeature } from '@/lib/useFeatureFlagsContext';
import styles from './page.module.css';

export default function Page({ params } : { params: { slug: string } }) {
  const demoFeature = useDemoFeature();

  return (
    <main className={styles.main}>
      {params.slug.toLowerCase() === 'demofeature' && demoFeature ? 'this is demoFeature' : 'Nothing'}
    </main>
  );
}
