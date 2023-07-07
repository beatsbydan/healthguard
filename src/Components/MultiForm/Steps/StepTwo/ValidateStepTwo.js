const ValidateStepTwo = (entry) => {
    let errors = {};
    if(entry.symptom === ""){
        errors.symptom = "Input cannot empty"
        errors.symptomsError = false
    }
    else{
        errors.symptom = ""
        errors.symptomsError = false
    }
    if(entry.symptoms.length === 5){
        errors.symptomsError = true
    }
    return errors;
}
export default ValidateStepTwo;