var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("rrr");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3500); 
}

var Index = 0;
carousel1();

function carousel1() {
  var j;
  var t = document.getElementsByClassName("qqq");
  for (j = 0; j < t.length; j++) {
    t[j].style.display = "none";
  }
  Index++;
  if (Index > t.length) {Index = 1}
  t[Index-1].style.display = "block";
  setTimeout(carousel1, 3500); 
}


mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}