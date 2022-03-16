import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button>로그인</button>
      <button>회원가입</button>
    </main>
  );
}
