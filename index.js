const hamburger = document.getElementById('hamburger')
const listContainer= document.querySelector('.list-container')
const navigationListContainer=document.querySelector(".navigation-links-container")

   

hamburger.addEventListener('click', ()=>{
    console.log("i am clicked")
    // navigationListContainer.style.display = "block"
    listContainer.classList.toggle("isOpen");
    
})

