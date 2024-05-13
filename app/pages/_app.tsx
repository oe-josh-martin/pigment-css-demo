import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@pigment-css/react/styles.css';

function App({ Component, pageProps }: AppProps) {
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
