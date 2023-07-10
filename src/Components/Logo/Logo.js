import './Logo.css'
import {TbRibbonHealth} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import FormContext from '../../Contexts/FormContext/FormContext'

const Logo = () => {
    const ctx = useContext(FormContext)
    return ( 
        <div className="logoBlock">
            <TbRibbonHealth color='#354649' size={25}/>
            <Link onClick={ctx.handleDefault} to={'/'}>HEALTHGUARD</Link>
        </div>
    );
}
export default Logo;