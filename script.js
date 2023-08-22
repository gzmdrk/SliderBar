
const nextIcon = document.querySelector(".next");
const prevIcon = document.querySelector(".prev");

const imageContainer = document.querySelector(".imageContainer");
const imgs = document.querySelectorAll("img")         //kaç imagem var.değişkene atayalım



let timeout
let currentImg= 1;

prevIcon.addEventListener("click",()=>{
    currentImg--;
    updateImg();
    clearTimeout(timeout);
})

nextIcon.addEventListener("click",()=>{       //yapılacak işlemler oldugu için arrowfunc açtım     
    currentImg ++;                          //her tıkladıgımda img 1 artsın
    updateImg();                //bir fonksiyon yazalım 
    clearInterval(timeout);
})

function updateImg(){

    if(currentImg > imgs.length){
        currentImg=1;
    }
    else if(currentImg < 1){
        currentImg = imgs.length;

    }
    imageContainer.style.transform = `translateX(-${(currentImg-1)*700}px)`

    //---------otomatik geçiş
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();        //yeniden burda da çağırdım fonks.u.
        //ama bir s0run var..hızlı ilerlemeye başladı slider hem tıklama hem otomatik olunca o yuzden yukarı gidip cleartimeout deycez  
    },4000)
}
updateImg();                //her zmaan çağırcaz 
