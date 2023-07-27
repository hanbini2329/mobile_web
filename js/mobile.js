let num=1;

function nextGallery(){
    num++;
    if(num>5) {num=1;}
    document.querySelector('#gallery').src="image/main"+num+".png";
}
function prevGallery(){
    num--;
    if(num<1) {num=5;}
    document.querySelector('#gallery').src="image/main"+num+".png";
}