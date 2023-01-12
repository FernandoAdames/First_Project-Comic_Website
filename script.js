// //window.onload = function () {
//     var image = document.getElementById('dc-img');
//         var img_array=['img/dcimg2.jpeg','img/dcimg3.jpeg','img/dcimg4.jpeg','img/dcimg5.jpeg'];
//         var index=0;
//         function slide() {
//             image.src = img_array[index++%img_array.length];
//         }
//         setInterval(slide, 2000)
        
//   //  }var image = document.getElementById('img');
//   var image2 = document.getElementById('marvel-img');
//   var img_array2=['img/marvelimg1.jpeg','img/marvelimg2.jpeg','img/marvelimg3.jpeg','img/marvelimg4.jpeg'];
//   var index2=0;
//   function slide2() {
//       image2.src = img_array[index++%img_array2.length];
//   }
//   setInterval(slide2, 2000)


function slideShow(image, imgArray, index) {
    console.log({index, modulesIndex: index % imgArray.length})
    image.src = imgArray[index % imgArray.length];
}

var dcImage = document.getElementById('dc-img');
var dcImgArray = ['img/dcimg2.jpeg','img/dcimg3.jpeg','img/dcimg4.jpeg','img/dcimg5.jpeg'];
var dcIndex = 0;
setInterval(function(){
    slideShow(dcImage, dcImgArray, dcIndex++);
    // if(dcIndex == dcImgArray.length) {
    //     dcIndex = 0;
    // }
}, 2000);

var marvelImage = document.getElementById('marvel-img');
var marvelImgArray = ['img/marvelimg1.jpeg','img/marvelimg2.jpeg','img/marvelimg3.jpeg','img/marvelimg4.jpeg'];
var marvelIndex = 0;
setInterval(function(){
    slideShow(marvelImage, marvelImgArray, (marvelIndex++ % marvelImgArray.length));
}, 2000);

