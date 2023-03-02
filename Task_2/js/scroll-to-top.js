let mybutton = document.getElementById("scroll-to-top");
let scrollDown = document.getElementById("scroll-to-bottom");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    scrollDown.style.display = "none";
  } else {
    mybutton.style.display = "none";
    scrollDown.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function bottomFunction(){
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.documentElement.scrollHeight);
}
