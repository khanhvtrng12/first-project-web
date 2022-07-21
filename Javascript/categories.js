var button1 = Array.from(document.getElementsByClassName("heart-like-button"));
button1.forEach( ( button, index ) => {
    button.addEventListener("click", () => {
    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
    } else {
        button.classList.add("liked");
    }
})
})
//   hiệu ứng chọn option các trang category
// var currentMenu;
var menuLinks = document.querySelectorAll('.menu-link');

function clickMenuHandler() {
  // if (currentMenu) {
  //   currentMenu.classList.remove('menu-active');
  // }
  document.querySelectorAll('.menu-link').forEach(item=>{
    item.classList.remove('menu-active')
})
  this.classList.add('menu-active');
} 
for(var i=0; i < menuLinks.length ; i++) {
  menuLinks[i].addEventListener('click', clickMenuHandler);
} 

var btnopen = Array.from(document.getElementsByClassName('open-modal-btn'))
var modal = document.querySelector('.modal')
var iconClose=document.querySelector('.modal_header i')
var btnClose=document.querySelector('.modal_footer button')
function toggleModal(e){
    // console.log(e.target);
   modal.classList.toggle("hide")
}
// btnopen.addEventListener('click',toggleModal)
btnClose.addEventListener("click",toggleModal)
iconClose.addEventListener("click",toggleModal)
modal.addEventListener('click',function(e){
   if(e.target==e.currentTarget){
       toggleModal()
   }
})


btnopen.forEach( ( button, index ) => {
    button.addEventListener("click",toggleModal)
})

//hiện ngày giờ mua hàng
var day = new Date()
var b = "Thứ "+(day.getDay()+1)+' ngày ' + day.getDate()+' tháng ' + (day.getMonth()+1) +' năm ' +(day.getFullYear()) +" "+(day.getHours()<10?'0':'')+day.getHours() +":"+(day.getMinutes()<10?'0':'')+day.getMinutes();
document.getElementsByClassName("appear-date")[0].innerHTML = b;