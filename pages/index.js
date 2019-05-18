import Link from 'next/link';
import Layout from '../components/Layout'

export default () => (
    <Layout title='index' description='indexだよ'>
        <h1>next.js</h1>
        <p>welcome to next.js</p>
        <Link href='/other'>
            <a>otherへ</a>
        </Link>
    </Layout>
);
