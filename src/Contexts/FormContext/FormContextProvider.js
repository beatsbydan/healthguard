import { useReducer } from "react";
import FormContext from "./FormContext";
import StepTwo from "../../Components/MultiForm/Steps/StepTwo/StepTwo";
import StepOne from "../../Components/MultiForm/Steps/StepOne/StepOne";
import StepThree from "../../Components/MultiForm/Steps/StepThree/StepThree";
import ValidateStepOne from "../../Components/MultiForm/Steps/StepOne/ValidateStepOne";
import ValidateStepTwo from "../../Components/MultiForm/Steps/StepTwo/ValidateStepTwo";
import ValidateMultiStepForm from "../../Components/MultiForm/ValidateMultiStepForm";
import axios from "axios";

const FormContextProvider = (props) => {
    const initialItems = {
        name: '',
        nameError:'',
        symptom:'',
        symptomError:'',
        symptoms : [],
        symptomsError: '',
        currPage: 0
    }
    const formReducer = (state, action) => {
        if(action.type === 'SET_NAME_VALUE'){
            const newName = action.value
            return{
                name: newName,
                nameError: state.nameError,
                symptom: state.symptom,
                symptomError: state.symptomError,
                symptoms: state.symptoms,
                symptomsError: state.symptomsError,
                currPage: state.currPage            
            }
        }
        if(action.type === 'SET_SYMPTOM_VALUE'){
            const newSymptom = action.value
            return{
                name: state.name,
                nameError: state.nameError,
                symptom: newSymptom,
                symptomError: state.symptomError,
                symptoms: state.symptoms, 
                symptomsError: state.symptomsError,
                currPage: state.currPage            
            }
        }
        if(action.type === 'ADD_SYMPTOM'){
            let newSymptoms = state.symptoms
            let newSymptom = state.symptom
            const data = {
                symptom: state.symptom,
                symptoms: state.symptoms
            }
            const error = ValidateStepTwo(data)
            if(error.symptom === "" && !error.symptomsError){
                if(!state.symptoms.some(symptom=>{
                    return symptom.name === action.value.name
                })){
                    newSymptoms = state.symptoms.push(action.value)
                }
                newSymptom = ''
            }
            return{
                name: state.name,
                nameError: state.nameError,
                symptom: newSymptom,
                symptomError: error.symptom,
                symptoms: newSymptoms ,
                symptomsError: state.symptomsError,
                currPage: state.currPage   
            }
        }
        if(action.type === 'REMOVE_SYMPTOM'){
            const newSymptoms = state.symptoms.filter(symptom=>{
                return symptom.id !== action.value
            })
            return{
                name: state.name,
                nameError: state.nameError,
                symptom: state.symptom,
                symptomError: state.symptomError,
                symptoms: newSymptoms, 
                symptomsError: state.symptomsError,
                currPage: state.currPage
            }
        }
        if(action.type === 'CLEAR'){
            const newSymptoms = []
            return{
                name: state.name,
                nameError: state.nameError,
                symptom: state.symptom,
                symptomError: state.symptomError,
                symptoms: newSymptoms,
                symptomsError: state.symptomsError,
                currPage: state.currPage 
            }
        }
        if(action.type === "NEXT"){
            let newNameError = state.nameError
            let newSymptomsError = state.symptomsError
            let newPage = state.currPage;
            if(state.currPage === 0){
                newNameError = ValidateStepOne(state.name)
                if(newNameError === ""){
                    newPage = state.currPage + 1
                }
            }
            if(state.currPage === 1){
                newSymptomsError = ValidateMultiStepForm(state.symptoms)
                if(newSymptomsError === ""){
                    newPage = state.currPage + 1
                }
            }
            return{
                name: state.name,
                nameError: newNameError,
                symptom: state.symptom,
                symptomError: state.symptomError,
                symptoms : state.symptoms,
                symptomsError: newSymptomsError,
                currPage: newPage
            }
        }
        if(action.type === "PREV"){
            let newPage = state.currPage
            if(state.currPage !== 0){
                newPage = state.currPage - 1
            }
            return{
                name: state.name,
                nameError: state.nameError,
                symptom: state.symptom,
                symptomError: state.symptomError,
                symptoms: state.symptoms,
                symptomsError: state.symptomsError,
                currPage: newPage
            }
        }
        return initialItems;
    }
    const [formDetails, dispatchFormDetails] = useReducer(formReducer, initialItems)
    const handleNameChange = (e) => {
        dispatchFormDetails({type: 'SET_NAME_VALUE', value: e.target.value})
    }
    const handleSymptomChange = (e) => {
        dispatchFormDetails({type: 'SET_SYMPTOM_VALUE', value: e.target.value})
    }
    const addSymptom = (symptom) => {
        dispatchFormDetails({type:'ADD_SYMPTOM', value: symptom})
    }
    const removeSymptom = (id) => {
        dispatchFormDetails({type:'REMOVE_SYMPTOM' , value:id})
    }
    const clearSymptoms = () => {
        dispatchFormDetails({type:'CLEAR'})
    }
    const handleNextPage = () => {
        dispatchFormDetails({type: 'NEXT'})
    }
    const handlePrevPage = () => {
        dispatchFormDetails({type: 'PREV'})
    }
    const handleSubmit = () => {
        dispatchFormDetails({type: 'NEXT'})
    }
    const getPage = () => {
        if(formDetails.currPage === 0){
            return <StepOne/>
        }
        if(formDetails.currPage === 1){
            return <StepTwo/>
        }
        if(formDetails.currPage === 2){
            return <StepThree/>
        }
    }
    const value = {
        formData: formDetails,
        getPage:getPage,
        handleNextPage: handleNextPage,
        handlePrevPage: handlePrevPage,
        handleNameChange:handleNameChange,
        handleSymptomChange:handleSymptomChange,
        addSymptom: addSymptom,
        removeSymptom: removeSymptom,
        clearSymptoms: clearSymptoms,
        handleSubmit: handleSubmit
    }
    return ( 
        <FormContext.Provider value={value}>
            {props.children}
        </FormContext.Provider>
    );
}
export default FormContextProvider;