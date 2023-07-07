import React from "react";

const FormContext = React.createContext({
    formData: {},
    getPage: ()=> {},
    handleNextPage: ()=> {},
    handlePrevPage: ()=> {},
    handleNameChange: ()=>{},
    handleSymptomChange: ()=>{},
    addSymptom: ()=>{},
    removeSymptom: ()=>{},
    clearSymptoms: ()=>{},
    handleSubmit: ()=>{}

})
export default FormContext;