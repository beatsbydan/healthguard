import { useContext } from "react";
import FormContext from "../../../../Contexts/FormContext/FormContext";
import './StepThree.css'
import {BsCheckCircle} from 'react-icons/bs'

const StepThree = () => {
    const ctx = useContext(FormContext)
    return (  
        <div className="formBlock">
            <h1>HERE'S WHAT WE THINK...</h1>
            {/* <ul className='predictionsBlock'>
                {ctx.formDetails.predictions.map(prediction=>{
                    return(
                        <li className='prediction' key={prediction.id}>
                            <BsCheckCircle size={25} color='#354649'/>
                        </li>
                    )
                })}
            </ul> */}
            <div className="formActions">
                <button className='prev' onClick={ctx.handlePrevPage} type='button'>BACK</button>
            </div>
        </div>
    );
}
export default StepThree;