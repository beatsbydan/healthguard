import { useContext } from 'react';
import './Symptoms.css'
import FormContext from '../../../../../Contexts/FormContext/FormContext';
import Symptom from './Symptom/Symptom';
const Symptoms = () => {
    const ctx = useContext(FormContext)
    return (  
        <ul className="symptoms">
            {ctx.formData.symptoms.map(symptom=>{
                return(
                    <Symptom symptom ={symptom} key ={symptom.id}/>
                )
            })}
        </ul>
    );
}
export default Symptoms;