import { getAllFeatureFlags } from '../../lib/featureFlags';
import styles from './page.module.css'

export default async function Dashboard() {
  const featureFlags = await getAllFeatureFlags();

  return (
    <main className={styles.main}>
      <h1>Current feature flags:</h1>

      <ul>
        {featureFlags.map((featureFlag) => (
          <li key={featureFlag.id}>
            <div className={styles.dot} data-enabled={featureFlag.enabled} />
            {featureFlag.id}
          </li>
        ))}
      </ul>
    </main>
  );
}
