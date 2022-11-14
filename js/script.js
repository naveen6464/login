function loginvalidate()
{
    var name=window.document.loginform.utext.value;
    var pwd=document.loginform.ptext.value;
    if(name=="" && pwd=="")
    {
        //alert("Both the fields are empty")
        document.getElementById("uerr").innerHTML="Enter The username"
        document.getElementById("uerr").style.color="red"
        document.getElementById("perr").innerHTML="Enter The Password"
        document.getElementById("perr").style.color="red"
        document.getElementById("utext").style.backgroundColor="Yellow"
        document.getElementById("ptext").style.backgroundColor="Yellow"
        document.loginform.utext.focus()
        return false;
    }
    else if(name=="")
    {
        //alert("Username is empty")
        document.getElementById("uerr").innerHTML="Enter The username"
        document.getElementById("uerr").style.color="red"
        document.getElementById("utext").style.backgroundColor="Yellow"
        document.loginform.utext.focus()
        return false;
    }
    else if(pwd=="")
    {
        //alert("Password is empty")
        document.getElementById("perr").innerHTML="Enter The Password"
        document.getElementById("perr").style.color="red"
        document.getElementById("ptext").style.backgroundColor="Yellow"
        document.loginform.ptext.focus()
        return false;
    }
    else
    {
        return true;
    }
}
function emptyUser()
{
    var name=window.document.loginform.utext.value;
    if(name=="")
    {
        //alert("Username is empty")
        document.getElementById("uerr").innerHTML="Enter The username"
        document.getElementById("uerr").style.color="red"
        document.getElementById("utext").style.backgroundColor="Yellow"
        document.loginform.utext.focus()
        return false;
    }
    else{
        document.getElementById("uerr").innerHTML=""
        document.getElementById("utext").style.backgroundColor="white"
    }
}
function emptyPwd()
{
    var name=windpe.document.loginform.ptext.value;
     if(pwd=="")
    {
        //alert("Password is empty")
        document.getElementById("perr").innerHTML="Enter The Password"
        document.getElementById("perr").style.color="red"
        document.getElementById("ptext").style.backgroundColor="Yellow"
        document.loginform.ptext.focus()
        return false;
    }
    else{
        document.getElementById("perr").innerHTML=""
        document.getElementById("ptext").style.backgroundColor="white"
    }
    
}
