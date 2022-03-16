import dynamic from 'next/dynamic';

const RemoteMario = dynamic(() => import('app1/mario'), { ssr: false });

const LoginPage = () => <RemoteMario />;

export default LoginPage;
