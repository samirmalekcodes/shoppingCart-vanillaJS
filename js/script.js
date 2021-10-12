
var hearts = Array.from(document.getElementsByClassName('fa-heart'))

for (let heart of hearts){
    heart.addEventListener("click" , function(){
        if(heart.style.color!== "red") heart.style.color = "red"
        else heart.style.color = "#212529"
    })
}

