import React, { useContext } from 'react';
import './MultiForm.css'
import FormContext from '../../Contexts/FormContext/FormContext';
import {BsFillChatFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
const MultiForm = () => {
    const ctx = useContext(FormContext)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return ( 
        <section className='multiForm'>
            <div className="top">
                <Logo/>
                <div className="letsChat">
                    <BsFillChatFill color='#A3C6C4' size={25}/>
                    <Link to={'/chat'}>CHAT</Link>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                {ctx.getPage()}
            </form>
        </section>
    );
}
export default MultiForm;