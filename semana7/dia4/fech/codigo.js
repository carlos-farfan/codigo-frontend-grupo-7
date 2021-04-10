const url = "https://pokeapi.co/api/v2/pokemon/136/";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    const elemento = document.getElementById("elemento");
    elemento.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
             <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Mi pokemon favorito</p>
                <a href="#" class="btn btn-primary">Ir al mapa</a>
         </div>
    `;
  })
  .catch((error) => new Error(error.message));




const generadorPokemones = async (idPokemon) => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
    );
    const data = await respuesta.json();

    const elemento = document.getElementById("elemento1");

    elemento.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
         <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Mi pokemon favorito</p>
            <a href="#" class="btn btn-primary">Ir al mapa</a>
     </div>
`;
  } catch (error) {
    console.log(error);
  }
};

generadorPokemones(157)


//con axios


const generadorPokemonesAxios = async (idPokemon) => {
    try {
      const respuesta = await axios(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
      );
      const elemento = document.getElementById("elemento2");
  
      elemento.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${respuesta.data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
           <div class="card-body">
              <h5 class="card-title">${respuesta.data.name}</h5>
              <p class="card-text">Mi pokemon favorito</p>
              <a href="#" class="btn btn-primary">Ir al mapa</a>
       </div>
  `;
    } catch (error) {
      console.log(error);
    }
  };

  generadorPokemonesAxios(265)



///////////////////////////////////////////



const generadorPokemonesAxios = async (nombrePokemon) => {
    try{
      const respuesta = await axios(
        `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`
      );
      const elemento = document.getElementById("generadorPokemonesAxios");
      elemento.innerHTML = `
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
${respuesta.data.name}
  </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${respuesta.data.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${respuesta.data.sprites.front_default}" class="card-img-top" alt="mi pokemon favorito">
        <p> ${respuesta.data.id} </p>
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `;
} catch (error) {
  console.log(error);
}
};

generadorPokemonesAxios(victreebel)










