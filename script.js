var one_slides = document.getElementById('one');
var two_slides = document.getElementById('two');
var three_slides = document.getElementById('three');
var four_slides = document.getElementById('four');



page1.addEventListener('click', fun1);
page5.addEventListener('click', fun1);
page9.addEventListener('click', fun1);
page13.addEventListener('click', fun1);
function fun1() {
  one_slides.style.display = 'block';
  two_slides.style.display = 'none';
  three_slides.style.display = 'none';
  four_slides.style.display = 'none';
}

page2.addEventListener('click', fun2);
page6.addEventListener('click', fun2);
page10.addEventListener('click', fun2);
page14.addEventListener('click', fun2);
function fun2() {
  one_slides.style.display = 'none';
  two_slides.style.display = 'block';
  three_slides.style.display = 'none';
  four_slides.style.display = 'none';
}

page3.addEventListener('click', fun3);
page7.addEventListener('click', fun3);
page11.addEventListener('click', fun3);
page15.addEventListener('click', fun3);
function fun3() {
  one_slides.style.display = 'none';
  two_slides.style.display = 'none';
  three_slides.style.display = 'block';
  four_slides.style.display = 'none';
}

page4.addEventListener('click', fun4);
page8.addEventListener('click', fun4);
page12.addEventListener('click', fun4);
page16.addEventListener('click', fun4);
function fun4() {
  one_slides.style.display = 'none';
  two_slides.style.display = 'none';
  three_slides.style.display = 'none';
  four_slides.style.display = 'block';
}
