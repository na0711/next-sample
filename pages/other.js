import Link from 'next/link';
import Layout from '../components/MyLayout'

export default () => (
    <Layout>
        <h1>next.js</h1>
        <p>welcome to next.js</p>
        <Link href='/'>
            <button>indexへ</button>
        </Link>
    </Layout>
);
