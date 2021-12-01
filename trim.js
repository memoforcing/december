
function setFocusResposta(){
    if(event.keyCode === 13){
        var a = document.getElementById("inputa").value;
        console.log(a);  
        a = a.trim();
        inputb.value = a;
    }    
}