import { useContext } from "react";
import FormContext from "../../../../Contexts/FormContext/FormContext";

const StepThree = () => {
    const ctx = useContext(FormContext)
    return (  
        <div className="formBlock">
            <h1>HERE'S WHAT WE THINK...</h1>
            <div className="formActions">
                <button className='prev' onClick={ctx.handlePrevPage} type='button'>BACK</button>
            </div>
        </div>
    );
}
export default StepThree;