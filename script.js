function scrollMenu(){

document.getElementById("menu").scrollIntoView({
behavior:"smooth"
})

}


function filterMenu(type){

let items=document.querySelectorAll(".item")

items.forEach(item=>{

if(type==="all"){
item.style.display="block"
}

else if(item.classList.contains(type)){
item.style.display="block"
}

else{
item.style.display="none"
}

})

}


let cart=[]

function addCart(name){

cart.push(name)

let list=document.getElementById("cartList")

let li=document.createElement("li")

li.innerText=name

list.appendChild(li)

}


document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault()

alert("Table reserved successfully!")

})


document.getElementById("darkModeBtn").onclick=function(){

document.body.classList.toggle("dark")

}

