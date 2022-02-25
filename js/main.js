document.getElementById('earth').onclick = earth
document.getElementById('venus').onclick = venus
document.getElementById('mars').onclick = mars
document.getElementById('jupiter').onclick = jupiter
document.getElementById('uranus').onclick = uranus


function earth() {
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url(https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif)");
}

function venus() {
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url(https://bestanimations.com/media/planets/1707011986venus-planet-animation-3.gif");
}

function mars() {
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url(https://31.media.tumblr.com/a724698b000a962a091ad1bc3647c195/tumblr_nv38nwYSYm1sjwwzso1_500.gif");
}

function jupiter() {
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url(https://cdn.dribbble.com/users/787991/screenshots/2031467/jupiter-large.gif");
}

function uranus() {
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url(https://bestanimations.com/media/planets/1184781408saturn-planet-animation-11.gif");
}