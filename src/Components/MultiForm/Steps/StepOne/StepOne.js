import { useContext } from 'react';
import FormContext from '../../../../Contexts/FormContext/FormContext';
import { useNavigate } from 'react-router-dom';
const StepOne = () => {
    const ctx = useContext(FormContext)
    const navigate = useNavigate()
    const handlePrev = () => {
        navigate('/')
    }
    return ( 
        <div className='formBlock'>
            <h1>WE WANT TO KNOW YOU!</h1>
            <div className="formElement">
                <label htmlFor="userInput">
                    NAME:
                    <em className={ctx.formData.nameError !== "" ? "error" :""}>{ctx.formData.nameError}</em>
                </label>
                <input className={ctx.formData.nameError !== "" ? "errorField" :""} type="text" placeholder='Enter your name' value={ctx.formData.name} onChange={ctx.handleNameChange} />
            </div>
            <div className="formActions">
                <button onClick={ctx.formData.currPage === 0 ? handlePrev : ctx.handlePrevPage} type='button'>BACK</button>
                <button onClick={ctx.handleNextPage} type='button'>NEXT</button>
            </div>
        </div>
    );
}
export default StepOne;