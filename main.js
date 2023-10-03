const catalogo = document.getElementById("catalogo_grid");

const fetcheando = async () => {
    try {
      const resp = await fetch('https://fakestoreapi.com/products');
      //   Si no lo convertimos en un json nos va a tirar error de cors
      //   console.log(resp);
      const json = await resp.json();
      console.log(json);
  
      // Aca ejecutamos a la funcion que va a renderizar y le estamos pasando por parametro el array de objetos con toda la data
      renderCharacters(json);
    } catch (error) {
      console.log(`Funcion Fetch: ${error}`);
    }
  };

  fetcheando();
  
const renderCharacters1 = (product) =>{
        return `<div class="productos">
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="" width="150px" height="150px">
        <p>$${product.price}</p>
    </div>`
}

const renderCharacters = charactersList => {
  catalogo.innerHTML = charactersList.map(renderCharacters1).join('');
  };
  

const carousel = document.querySelector(".carousel");

const imagenesDeFondo = [
  "imagen_1.jpg",
  "imagen_2.jpg",
  "imagen_3.jpg",
];

let imagenActual = 0;

const funcionCarousel = () =>{
  imagenActual = (imagenActual + 1) % imagenesDeFondo.length;
  const nuevaImagen = imagenesDeFondo[imagenActual];
  console.log(`${nuevaImagen}`);
  carousel.style.backgroundImage = `url(./img/${nuevaImagen})`;
}

carousel.addEventListener("click", funcionCarousel);

