window.onload = choosePic;

const pics = [
    "img/2d1fc437-d172-4a13-9120-b9003cf806ba.webp",
    "img/6b99668f-f3e6-4d45-90f8-36564befe02d.webp",
    "img/19d4b97d-e4e6-4fb0-9cf9-df40db84e444.webp",
    "img/39ff4cb3-3cc9-41a8-ab2a-dae7a0a3586a.webp",
    "img/91a3e2e9-1070-40cb-89e3-4c377451734a.webp",
    "img/244f8ac5-c756-4378-a13c-7d33122a0727.webp",
    "img/816d7603-f423-4e91-9c9b-90c3a95c124c.webp",
    "img/76255d4c-8731-41f9-bd73-fa96edf1005b.webp",
    "img/a38709f9-f198-416f-b7c5-1e9bda9de408.webp",
    "img/fruuuu.webp",
];

function choosePic() {
    const randomNum = Math.floor(Math.random() * pics.length);
    document.getElementById("myPicture").src = pics[randomNum];
}
