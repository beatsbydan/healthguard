import { useContext } from 'react';
import './Symptom.css'
import {VscClose} from 'react-icons/vsc'
import FormContext from '../../../../../../Contexts/FormContext/FormContext';
const Symptom = (props) => {
    const ctx = useContext(FormContext)
    return ( 
        <li className = 'symptom'>
            <p>{props.symptom.name}</p>
            <VscClose onClick={()=>ctx.removeSymptom(props.symptom.id)} size={30} cursor={'pointer'} color='#354649'/>
        </li>
    );
}
export default Symptom;