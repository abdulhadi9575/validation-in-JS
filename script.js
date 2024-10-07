function validateform(){
    var a=document.forms["myform"]["fname"].value;
    if (a==""){
        alert("plz fill your name");
        retrun false;
    }
}