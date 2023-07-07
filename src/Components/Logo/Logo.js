import './Logo.css'
import {TbRibbonHealth} from 'react-icons/tb'
import {Link} from 'react-router-dom'

const Logo = () => {
    return ( 
        <div className="logoBlock">
            <TbRibbonHealth color='#354649' size={25}/>
            <Link to={'/'}>HEALTHGUARD</Link>
        </div>
    );
}
export default Logo;