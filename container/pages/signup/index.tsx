import dynamic from 'next/dynamic';
import Image from 'next/image';

const RemoteLuigi = dynamic(() => import('app2/luigi'), { ssr: false });

const App2 = () => (
  <>
    <Image
      src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png"
      alt="Luigi"
      width={240}
      height={413}
    />
    <RemoteLuigi />
  </>
);

export default App2;
