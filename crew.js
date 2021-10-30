const hamburger = document.getElementById('hamburger')
const listContainer= document.querySelector('.list-container')

   

hamburger.addEventListener('click', ()=>{
    listContainer.classList.toggle("isOpen");
})



