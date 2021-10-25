const planetLinks=document.querySelectorAll('#planet-links')
const hamburger = document.getElementById('hamburger')
const listContainer= document.querySelector('.list-container')
const listCont=document.querySelector(".list-cont")

planetLinks.forEach(links=>{
    links.addEventListener('click',function(){
        
        listCont.querySelector('.active').classList.remove('active')
        links.classList.add('active')
   })
      
})
hamburger.addEventListener('click', ()=>{
    console.log("i am clicked")
    listContainer.classList.toggle("isOpen");
})
