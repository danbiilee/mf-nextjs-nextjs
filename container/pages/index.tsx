import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">
        <a>로그인</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    </main>
  );
}
