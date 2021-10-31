const hamburger = document.getElementById('hamburger')
const listContainer= document.querySelector('.list-container')
const carouselItems= document.querySelectorAll('.carousel1-item')
const navButtons=document.querySelectorAll('.carousel1__button')

   

hamburger.addEventListener('click', ()=>{
    listContainer.classList.toggle("isOpen");
})



   
 navButtons.forEach((navbutton, i)=>{
   navbutton.addEventListener("click", ()=>{
   //UNSELECT ALL CAROUSEL
      carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))


   //ADD THE SELECTED CLASS    
      carouselItems[i].classList.add('carousel1-item--selected')
   })

 })





















// //FOR TNE FIRST NAVIGATION BUTTON
// const firstNavigationButton=document.querySelector('.carouselOne__button ')

// firstNavigationButton.addEventListener('click', ()=>{
//    console.log("i was clicked")
   
//    carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))
//    carouselItems[0].classList.add('carousel1-item--selected')
// })

// //FOR THE SECOND NAVIGATION BUTTON
// const secondNavigationButton=document.querySelector('.carouselTwo__button')

//  secondNavigationButton.addEventListener ('click', ()=>{

//    console.log("i am happpy")
//    carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))
//    carouselItems[1].classList.add('carousel1-item--selected')
// })

// // FOR THE THIRD NAVIGATION BUTTON

// const thirdNavigationButton= document.querySelector('.carouselThree__button')

// thirdNavigationButton.addEventListener('click',()=>{

// console.log('i was clicked')
// carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))
// carouselItems[2].classList.add('carousel1-item--selected')
// })


// // FOR THE FOURTH NAVIGATION BUTTON

// const fourthNavigationButton= document.querySelector('.carouselFour__button')

// fourthNavigationButton.addEventListener('click',()=>{

// console.log('i was clicked')
// carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))
// carouselItems[3].classList.add('carousel1-item--selected')
// })











// // const navigationButtons= document.querySelectorAll('.carousel1__button ')
// // navigationButtons.forEach((button, i)=>{button.addEventListener("click",()=>{ 
// //    //UN-SELECT ALL THE ITEMS
// //    carouselItems.forEach(carouselItem=>carouselItem.classList.remove('carousel1-item--selected'))

// //    carouselItems[i].classList.add('carousel1-item--selected')

// // })})
   
 

