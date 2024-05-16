var default12 = "user";
var default21 = "123456";

function validate(){
    var emai = document.getElementById('emailnme').value;
    var password2 = document.getElementById('pass1').value;
    var name = document.getElementById("usernme").value;
    var password = document.getElementById('pass').value;
    check1 = name;
    check2 = password;


    if(password != password2){
        alert("The passwword doesnot match! please retry");
        return false;
    }
    else
        alert("Sucess")
        console.log(check1)
        true;
}

function loginvalidate(){
    var userchecker = document.getElementById("authuser").value;
    var passchecker = document.getElementById("authpass").value;

    if(userchecker != default12){
        alert("Username incorrect please retry");
        return false;
    }
    else if(passchecker != default21){
        alert("Passwword incorrect please retry");
        return false;
    }
    else
        alert("sucess!")
}



