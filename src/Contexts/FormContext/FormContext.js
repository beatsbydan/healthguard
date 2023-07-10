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
    handleDefault: ()=>{},
    clearSymptoms: ()=>{},
    handleSubmit: ()=>{}

})
export default FormContext;