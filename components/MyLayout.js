import Header from './Header';
import style from '../static/Style';


const Layout = (props) => (
  <>
    {style}
    <Header />
    {props.children}
  </>
)

export default Layout