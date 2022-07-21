// hiệu ứng chuyển ảnh cho chi tiết các game
var imgFeature1 = document.querySelector('.img-feature1')
var listImg1 = document.querySelectorAll('.list-image1 img')
var prevBtn1 = document.querySelector('.prev1')
var nextBtn1 = document.querySelector('.next1')
var currentIndex1=0;
// listImg1.forEach(imgElement => {
//         imgElement.addEventListener('click', e=> {
//             imgFeature1.src = e.target.getAttribute('src')
//         })
//     })
function updateImageByIndex(index){
    // remove active class
    document.querySelectorAll('.list-image1 div').forEach(item=>{
        item.classList.remove('active1')
    })
    currentIndex1=index
    imgFeature1.src=listImg1[index].getAttribute('src')
    listImg1[index].parentElement.classList.add('active1')
}
    listImg1.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature1.style.opacity = '0'
        setTimeout(()=>{
        updateImageByIndex(index)
        imgFeature1.style.opacity = '1'
    },200)
    })
})
//sự kiện click chuột vào button để chuyển ảnh
prevBtn1.addEventListener('click',e =>{
        if(currentIndex1 == 0){
            currentIndex1=(listImg1.length -1)
        }
        else
        {
            currentIndex1--
        }
    
     imgFeature1.style.animation=''
     setTimeout(()=>{
        updateImageByIndex(currentIndex1)
         imgFeature1.style.animation = 'slideLeft 1s ease-in-out forwards'
    },200)
 })
   
nextBtn1.addEventListener('click',e =>{
    if(currentIndex1 == listImg1.length-1){
        currentIndex1=0
   }else{
        currentIndex1++
   }
   imgFeature1.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex1)
        imgFeature1.style.animation='slideRight 1s ease-in-out forwards'
   },200)
})
//TỰ chuyển ảnh   
var x = setInterval(function(){
    if(currentIndex1 == listImg1.length-1){
        currentIndex1=0
   }else{
        currentIndex1++
   }
   imgFeature1.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex1)
        imgFeature1.style.animation='slideRight 1s ease-in-out forwards'
   },1200)
},4200)
//heart jquery

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
//hiện ngày giờ trong popup thông báo mua hàng
var day = new Date()
var b = "Thứ "+(day.getDay()+1)+' ngày ' + day.getDate()+' tháng ' + (day.getMonth()+1) +' năm ' +(day.getFullYear()) +" "+(day.getHours()<10?'0':'')+day.getHours() +":"+(day.getMinutes()<10?'0':'')+day.getMinutes();
document.getElementsByClassName("appear-date")[0].innerHTML = b;