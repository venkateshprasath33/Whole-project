

function validation(){
    var nam = document.getElementById("uname").value;

    if(nam==""){
        document.getElementById("name").innerHTML="Please Enter your name";
        document.na.me.focus();
        return false;
    }
    
    var ema=document.getElementById("email").value;

    if(ema==""){
        document.getElementById("mail").innerHTML="Please Enter your email";
        document.na.m.focus();
        return false;
    }

    var pass = document.getElementById("password").value;
    
    if(pass==""){
        document.getElementById("demo").innerHTML="Please Enter your password";
        document.na.e.focus();
        return false;
    }
    if(pass.length<=7){
        document.getElementById("demo").innerHTML="Please Enter atleast 8 characters";
        document.na.s.focus();
        return false;
    }
    
    var pass1 = document.getElementById("confirm").value;
    
    if(pass1==""){
        document.getElementById("demo1").innerHTML="Please Re Enter your password";
        return false;
    }
    if(pass1!=pass){
        document.getElementById("demo1").innerHTML="Please Enter the password correctly";
        return false;
    }

    
}

