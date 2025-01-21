function change(button){
    if(button.textContent ==='Login' ){
        button.textContent = 'Logout';
    }else{
        button.textContent= 'Login';
    }
}

function hideButton(){
    var status = document.getElementById("definition_Btn");

    if(status.style.display === "block" ){
        status.style.display = "none" ;
    }else{
        status.style.display = "block" ;
    }
}