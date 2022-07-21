// var imgFeature = document.querySelector('.img-feature')
// var listImg = document.querySelectorAll('.list-image img')
// var prevBtn = document.querySelector('prev')
// var nextBtn = document.querySelector('next')

// listImg.forEach(imgElement => {
//     imgElement.addEventListener('click', e=> {
//         imgFeature.src = e.target.getAttribute('src')
//     })
// })

//JS trang chính
//sự kiện click chuột chuyên slide từng bức ảnh
var imgFeature = document.querySelector('.img-feature')
var listImg =document.querySelectorAll('.list-image img')
var prevBtn=document.querySelector('.prev')
var nextBtn=document.querySelector('.next')

var currentIndex=0;
var currentIndex1=0;
var dots = document.querySelector('.slider-dot-item')
var dotsItem =document.querySelectorAll('.slider-dots li')
function updateBydotIndex(index){
    // remove active class
    document.querySelectorAll('.slider-dot-item').forEach(item=>{
        item.classList.remove('active2')
    })
    currentIndex1=index
    dotsItem[index].classList.add('active2')
}
dotsItem.forEach((dotElement,index)=>{
    dotElement.addEventListener('click',e=>{
        
        updateBydotIndex(index)
       
        updateImageByIndex(index)
          
    
    })
})
function updateImageByIndex(index){
    // remove active class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex=index
    imgFeature.src=listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

    listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity = '0'
        setTimeout(()=>{
        updateImageByIndex(index)
        updateBydotIndex(index)
        imgFeature.style.opacity = '1'
    },200)
    })
})
prevBtn.addEventListener('click',e =>{
   if(currentIndex == 0){
        currentIndex=(listImg.length-1)
   }else{
       currentIndex--
   }
    imgFeature.style.animation=''
    setTimeout(()=>{
       updateImageByIndex(currentIndex)
       updateBydotIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
   },200)
})
   
nextBtn.addEventListener('click',e =>{
    if(currentIndex == listImg.length-1){
        currentIndex=0
   }else{
        currentIndex++
        
   }
   imgFeature.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex)
        updateBydotIndex(currentIndex)
        imgFeature.style.animation='slideRight 1s ease-in-out forwards'
   },200)
})
//TỰ chuyển ảnh   
setInterval(function(){
    if(currentIndex == listImg.length-1){
        currentIndex=0
   }else{
        currentIndex++
   }
   imgFeature.style.animation=''
   setTimeout(() =>{
        updateImageByIndex(currentIndex)
        updateBydotIndex(currentIndex)
        imgFeature.style.animation='slideRight 1s ease-in-out forwards'
   },1000)
},2500)
// var z ;
// function ssss(){
//     z = setInterval(function(){
//     if(currentIndex == listImg.length-1){
//         currentIndex=0
//    }else{
//         currentIndex++
//    }
//    imgFeature.style.animation=''
//    setTimeout(() =>{
//         updateImageByIndex(currentIndex)
//         updateBydotIndex(currentIndex)
//         imgFeature.style.animation='slideRight 1s ease-in-out forwards'
//    },1000)
//    console.log(currentIndex);
// },2500)
// }
// Hiệu ứng trên dotted

// hiệu ứng chuyển động của doted
// var y = setInterval(function(){
//     if(currentIndex == dotsItem.length-1){
//         currentIndex1=0
//    }else{
//         currentIndex1++
//    }
//    setTimeout(() =>{
//         updateBydotIndex(currentIndex)
//    },1000)
// },2200)

//sự kiện click chuột nút đăng nhập ra thông báo
function KiemTraDN(){
	
         if(document.frm_DN.txt_password.value == "" ){
            if(document.frm_DN.txt_name.value == "" ){
                alert("Lỗi! chưa nhập tên tài khản");
                document.frm_DN.txt_name.focus();
		        return false;
	        }
            alert("Lỗi! chưa nhập mật khẩu");
            document.frm_DN.txt_password.focus();
            return false;
        }
	
	else{ 
        alert("Thành công! Chào mừng bạn đến với STEAMVN® STORE");
        return true;
    }
}
//sự kiện click chuột nút đăng ký ra thông báo
function KiemTraDK(){
    if(document.frm_DK.chk_dieukhoan.checked == false){
        if(document.frm_DK.txt_password_confirm.value == "" ||document.frm_DK.txt_password_confirm.value != document.frm_DK.txt_password.value){
            if(document.frm_DK.txt_password.value == ""){
                if(document.frm_DK.txt_sdt.value == "" ){
                    if(document.frm_DK.txt_name.value == "" ){
                        alert("Lỗi! chưa nhập Họ Tên");
                        document.frm_DK.txt_name.focus();
                        return false;
                    }
                    alert("Lỗi! chưa nhập số điện thoại / Email");
                    document.frm_DK.txt_sdt.focus();
                    return false;
                }
                alert("Lỗi! chưa nhập mật khẩu");
                document.frm_DK.txt_password.focus();
                return false;
            }
            alert("Lỗi! Bạn chưa nhập xác nhận mật khẩu hoặc xác nhận mật khẩu không đúng");
            document.frm_DK.txt_password_confirm.focus();
            return false;
        }
        alert("Lỗi! Bạn chưa đồng ý chính sách và điểu khoản của STEAMVN® STORE");
        return false;
    }

    else{ 
        alert("Thành công! Chào mừng bạn đến với STEAMVN® STORE");
        return true;
    }
}
//hiệu ứng nút yêu thích  
//Hiện và ẩn password
function HidePassword(a) {
    // var c=document.getElementsByClassName("far")[0];
    if (document.frm_DK.txt_password.type === "password") {
        document.frm_DK.txt_password.type = "text";
      
    } else {
        document.frm_DK.txt_password.type = "password";
    }
  };
  function HidePassword_s(a) {
    // var c=document.getElementsByClassName("far")[0];
    if (document.frm_DK.txt_password_confirm.type === "password") {
        document.frm_DK.txt_password_confirm.type = "text";
      
    } else {
        document.frm_DK.txt_password_confirm.type = "password";
    }
    
  };
  function HidePassword_a(a) {
    // var c=document.getElementsByClassName("far")[0];
    if (document.frm_DN.txt_password.type === "password") {
        document.frm_DN.txt_password.type = "text";
      
    } else {
        document.frm_DN.txt_password.type = "password";
    }
  };
  //search bar tìm kiếm thể loại và chi tiết các game
  function SearchClick(){
    // if(document.querySelector('.searchbar').value == "Đối kháng")
    // {
    //     window.location.href =("./categories/doikhang.html");
    // }
    // else{
    //     alert("Trang web đang bảo trì");
    // }
    switch(document.querySelector('.searchbar').value){
        case "Đối kháng":
            window.location.href =("./categories/doikhang.html");
            break;    
        case "Kinh dị":
            window.location.href =("./categories/kinhdi.html");
            break;
        case "Mô phỏng":
            window.location.href =("./categories/mophong.html");
            break;
        case "Bắn súng":
            window.location.href =("./categories/bansung.html");
            break;
        case "NieR":
            window.location.href =("./Pages/chi tiết game/nier-automata.html");
            break;
        case "CS:GO":
                window.location.href =("./Pages/chi tiết game/bắn súng/CSGO.html");
                break;
        case "":
                alert("Bạn chưa nhập vào tên sản phẩm/ danh mục");
                break;
        default:
            alert("Tính năng chưa có");
            break;

    }
  }
