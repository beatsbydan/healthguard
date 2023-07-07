import { useContext } from "react";
import FormContext from "../../../../Contexts/FormContext/FormContext";
import Symptoms from "./Symptoms/Symptoms";

const StepTwo = () => {
    const ctx = useContext(FormContext)
    const mySymptom = {
        id: Math.random(),
        name: ctx.formData.symptom
    }
    return ( 
        <div className="formBlock">
            <h1>HOW DO YOU FEEL TODAY?</h1>
            <div className="formElement">
                <label htmlFor="userSymptoms" className="innerLabel">
                    SYMPTOMS:
                    <em className={ctx.formData.symptomError !== "" ? "error" :""}>{ctx.formData.symptomError}</em>
                </label>
                <div className="innerFormElement">
                    <input type="text" placeholder="Enter symptom" className={ctx.formData.symptomError !== "" ? "errorField" :""} value={ctx.formData.symptom} onChange={ctx.handleSymptomChange} />
                    <div className="innerFormActions">
                        <button onClick={()=>ctx.addSymptom(mySymptom)} type='button'>ADD</button>
                    </div>
                </div>                
            </div>
            <div className="symptomsList">
                {ctx.formData.symptoms.length > 0 ? <Symptoms/> : <h2>ADD YOUR SYMPTOMS!</h2>}
                <em className={ctx.formData.symptomsError !== "" ? "error" :""}>{ctx.formData.symptomsError}</em>
            </div>
            <div className="formActions">
                <button className='prev' onClick={ctx.handlePrevPage} type='button'>BACK</button>
                <button className="next" onClick={ctx.handleSubmit} type='button'>SUBMIT</button>
            </div>
            
        </div>
    );
}
export default StepTwo;