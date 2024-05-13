let menuToggle = document.querySelector('.menuToggle');
let bara_lateral = document.querySelector('.bara_lateral');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    bara_lateral.classList.toggle('active');
}
let Listamenu = document.querySelectorAll('.Listamenu li');
function activeLink(){
    Listamenu.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
Listamenu.forEach((item)=>
item.addEventListener('click', activeLink));
