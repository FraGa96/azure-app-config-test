'use client'
import React from 'react';
import styles from './page.module.css';

export default function ErrorRoot({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <main className={styles.main}>
      <div className={styles.errorCentered}>
        <h2>Something went wrong...</h2>
        <button className={styles.errorButton} onClick={reset}>Try Again</button>
      </div>
    </main>
  );
}
