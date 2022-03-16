import Image from 'next/image';
import styles from '../styles/Mario.module.css';

const Mario = () => {
  return (
    <main className={styles.main}>
      {/* <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      /> */}
      <h1 className={styles.title}>G'day! I'm Mario, a microfrontend.</h1>
      <span>I'm hosted at localhost:3001</span>
      <span>next/image 컴포넌트 에러남</span>
      <span>Fast Refresh 안됨</span>
    </main>
  );
};

export default Mario;
