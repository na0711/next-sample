import Link from 'next/link';
import style from '../static/Style';

export default () => (<div>
    {style}
    <h1>next.js</h1>
    <p>welcome to next.js</p>
    <Link href='/'>
        <button>indexへ</button>
    </Link>
</div>);
