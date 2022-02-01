window.onload = choosePic;

// var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
var pics = new Array("bom-dia.webp", );

function choosePic() {
     var randomNum = Math.floor(Math.random() * pics.length);
     document.getElementById("myPicture").src = myPix[randomNum];

