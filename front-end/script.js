$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});



const cards = document.querySelector('#cards');
cards.forEach(element => {
  const{nombre,edad,equipo,nacionalidad} = element;
cards.innerHTML=+`


`



});