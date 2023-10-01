/*const container = document.getElementById("container");

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
        return `<div>
                    <h1>${product.title}</h1>
                    <p>${product.price}</p>
        
                </div>`
}

const renderCharacters = charactersList => {
    container.innerHTML = charactersList.map(renderCharacters1).join('');
  };
  */

const container = document.querySelector(".carousel");

const funcionCarousel = () =>{

  container.style.backgroundImage = `url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`;

}

container.addEventListener("click", funcionCarousel);

