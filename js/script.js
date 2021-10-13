
var plus = Array.from(document.getElementsByClassName("fa-plus"))
var minus = Array.from(document.getElementsByClassName("fa-minus"))
var hearts = Array.from(document.getElementsByClassName("fa-heart"))
var deleteBtns = Array.from(document.getElementsByClassName("fa-times"))

//Total Price
function total(){
    var totalPrice = document.querySelector(".total-price")
    var Price = Array.from(document.getElementsByClassName("price"))
    var quantities = Array.from(document.getElementsByClassName("quantity"))
    
    let sum = 0
    for(let i=0; i<quantities.length; i++){
        sum = sum + Number(quantities[i].innerHTML.replace("$","").replace(",","")) * Number(Price[i].innerHTML.replace("$","").replace(",",""))
    }
    totalPrice.innerHTML = new Intl.NumberFormat('en-IN', { style: 'currency', currency: "USD" }).format(sum)
}

// Add Functionality 
for (let i in plus){
    plus[i].addEventListener("click", function(){
        plus[i].nextElementSibling.innerHTML++
        total()
    })
    minus[i].addEventListener("click", function(){
        if(minus[i].previousElementSibling.innerHTML>0)
        minus[i].previousElementSibling.innerHTML--;
        total()
    })
}   

//Favorites
for (let heart of hearts){
    heart.addEventListener("click" , function(){
        if(heart.style.color!== "red") heart.style.color = "red"
        else heart.style.color = "#212529"
    })
}

// Remove Item from Cart
for( let deleteBtn of deleteBtns){
    deleteBtn.addEventListener("click", function(){
        deleteBtn.parentElement.parentElement.remove()
    total()   
    })
}