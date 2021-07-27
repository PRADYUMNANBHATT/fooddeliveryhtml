const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');



buttonRight.onclick = function () {
  

  document.getElementById('gallery').scrollLeft += 80;
};
buttonLeft.onclick = function () {
  document.getElementById('gallery').scrollLeft -= 20;
};