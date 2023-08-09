import React, { useContext } from 'react';
import './MultiForm.css'
import FormContext from '../../Contexts/FormContext/FormContext';
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
            </div>
            <form action="" onSubmit={handleSubmit}>
                {ctx.getPage()}
            </form>
        </section>
    );
}
export default MultiForm;