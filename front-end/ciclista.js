const url = "localhost:4000/ciclistas/all";

document.addEventListener('DOMContentLoaded', showCards);
const cards = document.querySelector('#cards');


async function showCards(){
    const data =  await cards();
    console.log(data);
    data.forEach(element =>{
        const {nombre,edad,equipo,nacionalidad} = element;
        cards.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text">
            ${nombre}
          </p>
          <p>${edad}</p>
          <p>${equipo}</p>
          <p>${nacionalidad}</p>
        </div>
      </div>
        
        
        `
    })
}