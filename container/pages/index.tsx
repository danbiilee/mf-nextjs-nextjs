import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';
// import { Button } from '@mf-shared/dist/main';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Button /> */}
      <Link href="/login">
        <a>app1:3001</a>
      </Link>
      <Link href="/signup">
        <a>app2:3002</a>
      </Link>
    </main>
  );
}
