console.log("page loaded...");

var request = document.querySelector("#requests");
var connection = document.querySelector("#connections");
function acceptcnx(id){
    var cardItem = document.querySelector(id);
    cardItem.remove();
    request.innerText--;
    connection.innerText++;
}

function removecnx(id){
    var cardItem = document.querySelector(id);
    cardItem.remove();
    request.innerText--;
}




const profilename = document.getElementById('profile-name');
const editLink = document.getElementById('edit-profile');




function editname(){
    profilename.innerText = 'Nader Ben Mahmoud'
}
