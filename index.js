const btn = document.getElementById("btn")

let card = document.getElementById("card1")


btn.addEventListener("click", (e) => {


    console.log(e.target)



})


window.addEventListener("load", function() {
    card.style.display = 'none'
})