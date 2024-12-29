// JavaScript Document
const buttonz = document.getElementById('toggleButton');
const buttonOffz = document.getElementById('toggleOffButton');
const containerz = document.getElementById('container');

var prevScrollpos = window.pageYOffset;window.onscroll = function() {  var currentScrollPos = window.pageYOffset;  if (prevScrollpos > currentScrollPos) {    document.getElementById("navbar").style.top = "0";  } else {    document.getElementById("navbar").style.top = "-140px"; containerz.classList.remove('show');  buttonOffz.style.display = "none"; buttonz.style.display = "block";  }  prevScrollpos = currentScrollPos;}