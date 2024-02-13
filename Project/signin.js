
function validation(){
    // var nam=document.getElementById("username").value;
    // var pass=document.getElementById("password").value;

    const nam=document.na.me.value;
    const pass=document.na.m.value;

    if(nam==""){
        document.getElementById("demo").innerHTML="Please Enter your username";
        document.na.me.focus()
        return false;
    }
    

    
    if(pass==""){
        document.getElementById("dem").innerHTML="Please enter your password";
        document.na.m.focus()
        return false;
    }
}

// function vali(){
//     var vp=document.getElementById("email").value;
//     if(vp==""){
//         document.getElementById("de").innerHTML="Please Enter your mail!";
//         return false;
//     }
// }