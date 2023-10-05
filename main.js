const catalogo = document.getElementById("catalogo_grid");

const fetcheando = async () => {
    try {
      const resp = await fetch('https://fakestoreapi.com/products');
      const json = await resp.json();
      console.log(json);
      renderProductsMap(json);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  fetcheando();
  
const renderProducts = (product) =>{
  const { title, image, price, id} = product;
        return `<div class="productos">
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="" width="150px" height="150px">
        <p>$${product.price}</p>
    </div>`
}

const renderProductsMap = productsList => {
  catalogo.innerHTML = productsList.map(renderProducts).join('');
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

const sidebarBtn = document.querySelector(".sidebar");
const sidebar = document.querySelector("#sidebar_ul")


const showSideBar = () =>{
  sidebar.classList.toggle("hidden");
}

sidebarBtn.addEventListener("click", showSideBar);

const cartBtn = document.querySelector(".cart");
const cart = document.querySelector(".cart_div");

const showCart = () =>{
  cart.classList.toggle("hidden");
}

cartBtn.addEventListener("click", showCart);
