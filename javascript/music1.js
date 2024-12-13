const audio1=new Audio("sounds/vinu.mp3");
document.getElementById("vinu1").addEventListener("mouseover",vinu);
document.getElementById("vinu1").addEventListener("mouseout",kanna);
     function vinu(){
    audio1.play();
    }

function kanna(){
        audio1.pause();
        audio1.currentTime=0;
    }

const audio2=new Audio("sounds/vinu2(NTR).mp3");
audio2.loop=true;
document.getElementById("vinu2").addEventListener("mouseover",vinuu1);
document.getElementById("vinu2").addEventListener("mouseout",kanna1);
function vinuu1(){
    audio2.play();
}
function kanna1(){
    audio2.pause();
    audio2.currentTime=0;
}