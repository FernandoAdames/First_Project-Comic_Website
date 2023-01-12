

function slideShow(image, imgArray, index) {
    console.log({index, modulesIndex: index % imgArray.length})
    image.src = imgArray[index % imgArray.length];
}

var dcImage = document.getElementById('dc-img');
var dcImgArray = ['img/dcimg2.jpeg','img/dcimg3.jpeg','img/dcimg4.jpeg','img/dcimg5.jpeg'];
var dcIndex = 0;
setInterval(function(){
    slideShow(dcImage, dcImgArray, dcIndex++);
}, 2000);

var marvelImage = document.getElementById('marvel-img');
var marvelImgArray = ['img/marvelimg1.jpeg','img/marvelimg2.jpeg','img/marvelimg3.jpeg','img/marvelimg4.jpeg'];
var marvelIndex = 0;
setInterval(function(){
    slideShow(marvelImage, marvelImgArray, (marvelIndex++ % marvelImgArray.length));
}, 2000);

