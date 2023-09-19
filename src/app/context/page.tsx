import React from 'react';
import DemoFeature from './demoFeature';
import styles from './page.module.css'
import Link from 'next/link';

export default async function ContextPage() {
  return (
    <main className={styles.main}>
      Hello there!
      <DemoFeature />

      <Link
        href="/context/DemoFeature"
        className={styles.card}
      >
        <h2>
          Demo Feature as a slug <span>-&gt;</span>
        </h2>
      </Link>
    </main>
  )
}
