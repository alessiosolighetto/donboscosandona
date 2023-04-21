import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/logout.module.css';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {

      sessionStorage.setItem('isAuthenticated', false);
      router.push('/');
    }, 1500);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Logout eseguito</h1>
      <p className={styles.message}>Ti sei disconnesso correttamente.</p>
    </div>
  );
}
