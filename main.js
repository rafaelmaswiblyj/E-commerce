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

const formButton = document.querySelector(`#contacto_form_button`);

formButton.addEventListener("click", (e) =>{
  e.preventDefault();
  checkForm();
})

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");

const msgName = document.querySelector(".msg_name_empty");
const msgLastName = document.querySelector(".msg_lastName_empty");
const msgEmail = document.querySelector(".msg_email_empty");
const msgEmailInvalid = document.querySelector(".msg_email_invalid");

const form = document.getElementById("contacto_form");

const resetForm = () =>{
  msgName.classList.remove("visible");
  msgLastName.classList.remove("visible");
  msgEmail.classList.remove("visible");
  msgEmailInvalid.classList.remove("visible");
}

checkForm = () =>{
  checkEmail(emailInput); //checkea que el email no esté vacio y que contenga las arrobas y eso. Si está todo ok, devuelve true, sino, false. Renderiza el error si es necesario
  checkName(nameInput); //checkea que el nombre no esté vacío. Devuelve true o false y renderiza el error si es necesario
  checkLastName(lastNameInput); //checkea que el lastname no esté vacío. Devuelve true o false y renderiza el error si es necesario.

if(checkEmail(emailInput) && checkName(nameInput) && checkLastName(lastNameInput)){
  form.reset();
  resetForm();
  alert("Muchas gracias, recibirá un correo nuestro pronto");
}
};

const isEmpty = value => !value.length;

const checkEmail = (email) =>{
  if(isEmpty(email.value)){
    msgEmail.classList.add("visible");
    return false;
  } else if(!validEmail(email.value)){
    msgEmailInvalid.classList.add("visible");
    return false;
  } else{
    return true;
  }
}

const validEmail = (email) =>{
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
}

const checkName = (name) =>{
  if(isEmpty(name.value)){
    msgName.classList.add("visible");
    return false;
  }else{
    return true;
  }
}

const checkLastName = (lastname) =>{
  if(isEmpty(lastname.value)){
    msgLastName.classList.add("visible");
    return false;
  }else{
    return true;
  }
}