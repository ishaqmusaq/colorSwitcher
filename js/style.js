document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('violetButton').onclick = switchViolet;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
} 

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'red'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchViolet() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'violet'; 
  document.getElementsByTagName('body')[0].style.color = 'pink'; 
}
