function submitForm(){
        var firstname = validateString('Name');
        var lastname = validateString('last-Name');
        var age=validateAge('Age');
        var phone = validateNumber('phone-No');
        var email = validatEmail('Email');
        var gender=Gender('gender');
        if (firstname && lastname && age && phone && email && gender) {
            alert("all values read Successfully!");
        
        }else{
            alert("Enter Correct Values!");
        }
         document.getElementById("My-Form").reset();
}
function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if (!regExp.test(element.value)) {
        // alert("Enter string value")
        element.style.border = "2px solid red";
        return false;
    }
    else {
        element.style.border = "2px solid green";
        return element.value;
    }
}
function validatEmail(id){
    let email=document.getElementById("Email")
    let regExp= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!regExp.test(email.value)){
        alert("Please Enter Validate Email");
        email.style.border="2px solid red";
        return false;
    }else{
    email.style.border="2px solid Green";
    return email.value;
    }
}
function validateNumber(id) {
    var element = document.getElementById(id);
    var regExp = /^[0-9]{10}$/;
    if (!regExp.test(element.value)) {
        //alert("Enter Number")
        element.style.border = "2px solid red";
        return false;
    }
    else {
        element.style.border = "2px solid green";
        return element.value;
    }
}
function validateAge(id) {
    var element = document.getElementById(id);
    var regExp = /^[0-9]/;
    if (!regExp.test(element.value)) {
        //alert("Enter Number")
        element.style.border = "2px solid red";
        return false;
    }
    else {
        element.style.border = "2px solid green";
        return element.value;
    }
}
function Gender(id) {
    //RADIO BUTTONS
    const radiobtns = document.querySelectorAll('input[name="check"]:checked');
    console.log("radiobtn: " + radiobtns);
    var experience = [];
    radiobtns.forEach((radiobtn) => {
        experience.push(radiobtn.value);
    });
    console.log(experience);
    return experience;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }