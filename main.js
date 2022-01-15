let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
window.onscroll = function(){
  let value = scrollY;
  stars.style.bottom = value + 'px';
  moon.style.right = value + 'px';
  moon.style.bottom = value + 'px';
}
