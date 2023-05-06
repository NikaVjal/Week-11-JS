const mainImg = document.getElementById("img_main");

// console.log(mainImg);

let imgIndex = 1;

function changeIndex() {
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex += 1;
  }
}

function changeImage() {
  changeIndex();
  mainImg.src = `./images/piggy${imgIndex}.jpg`;
}
