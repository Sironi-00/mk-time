console.log("Reg...")

let data_transfer = () => {
    let input_name = document.getElementsByName("name");
    console.log(input_name[0].value);
    let input_email = document.getElementsByName("email");
    console.log(input_email[0].value);
    let input_password = document.getElementsByName("new-password");
    console.log(input_password[0].value);
    return true;
}
let c_pass = document.getElementsByName("confirm-password")

c_pass[0].addEventListener("change", ()=> data_transfer())

//////////////////////////////////
// Submit 
let submit = document.getElementsByName("submit")
submit[0].addEventListener("click", ()=> data_transfer())
