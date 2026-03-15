
let text = document.querySelector("#text");
let btns=document.querySelector("#btns");
let razzz=document.querySelector(".razzz");
let img=document.querySelector("#img");
img.classList.add("hide");
   function fun1(){
     text.innerHTML=" thanks yar, today is the best day of my life!! ❤️";
     razzz.style.justifyContent = "center"
     btns.classList.add("hide");
      razzz.style.backdropFilter = "blur(1px)";
    setTimeout(() => {
        razzz.classList.add("hide"); 
        document.body.style.backgroundImage="url('img14.png')";
    }, 3000);
}
let count=0;
function fun2(){
    count++;
    razzz.style.transform = "translate(30px, 60px)";
    if(count === 1){
    text.innerHTML="hey,think again!! \n will you??💗💖 ";
 razzz.style.transform = "translate(-175px, -200px)";}
else if(count === 2){
     text.innerHTML="hey, I promise you will be very happy with me!! \n will you??💗💖 ";
     razzz.style.transform = "translate(200px, 100px)";}
    else if(count===3){
        text.innerHTML="Are you Sure?  Please except it  🥺💗❤️‍🩹";
     razzz.style.transform = "translate(-150px, -100px)";}
    else{
           text.innerHTML="ok, i will not force you.You are free for your decisions 👍🥺🫡";
            razzz.style.transform = "translate(50px, -100px)";
            btns.classList.add("hide");
            setTimeout(() => {
        razzz.classList.add("hide"); 
        document.body.style.backgroundImage="url('img15.png')";
    }, 3000);
    }
}


