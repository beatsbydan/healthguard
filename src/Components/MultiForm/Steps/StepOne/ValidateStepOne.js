const ValidateStepOne = (entry) => {
    let error;
    if(entry === ""){
        error = "Name cannot be empty"
    }
    else{
        error = ""
    }
    return error;
}
export default ValidateStepOne;