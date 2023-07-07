const ValidateMultiStepForm = (entry) => {
    let error;
    if(entry.length < 3){
        error = "Provide at least 3 and at most 5 symptoms"
    }
    if(entry.length > 5){
        error = "Limit exceeded"
        return
    }
    if(entry.length > 2 ){
        error = ""
    }
    return error;
}

export default ValidateMultiStepForm;