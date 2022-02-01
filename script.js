window.onload = choosePic;

// var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
const pics = new Array("nhoco-nhoco.webp",);

function choosePic() {
    const randomNum = Math.floor(Math.random() * pics.length);
    document.getElementById("myPicture").src = pics[randomNum];
}
