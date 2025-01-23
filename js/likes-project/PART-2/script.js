
    var likes = [9, 12, 9];
    var likestxt = [
    document.querySelector("#likenum"),
    document.querySelector("#likenum1"),
    document.querySelector("#likenum2")

    ];
    function inclike(id){
    likes[id]++;
    likestxt[id].innerHTML = likes[id] +"Likes";
}