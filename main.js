const hamburger = document.getElementById('hamburger')
const listContainer= document.querySelector('.list-container')
   

hamburger.addEventListener('click', ()=>{
    console.log("i am clicked")
    listContainer.classList.toggle("isOpen");
})

