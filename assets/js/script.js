let productosGamer = [
  {
    id: 1,
    nombre: "Logitech G502",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 49.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "logitech-g502.webp",
  },
  {
    id: 2,
    nombre: "Razer BlackWidow Elite",
    category: "Gaming Keyboard",
    manufacturer: "Razer",
    price: 169.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "razer-blackWidow-elite.webp",
  },
  {
    id: 3,
    nombre: "SteelSeries Arctis Pro",
    category: "Gaming Headset",
    manufacturer: "SteelSeries",
    price: 179.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "steelSeries-arctis-pro.webp",
  },
  {
    id: 4,
    nombre: "ASUS ROG Strix GeForce RTX 3080",
    category: "Graphics Card",
    manufacturer: "ASUS",
    price: 699.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "asus-rog-strix-geforce-rtx-3080.webp",
  },
  {
    id: 5,
    nombre: "HyperX Alloy Origins",
    category: "Gaming Keyboard",
    manufacturer: "HyperX",
    price: 109.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "hyperx-alloy-origins.webp",
  },
  {
    id: 6,
    nombre: "Corsair K70 RGB MK.2",
    category: "Gaming Keyboard",
    manufacturer: "Corsair",
    price: 159.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "corsair-K70-rgb-mk-2.webp",
  },
  {
    id: 7,
    nombre: "LG 27GL850-B",
    category: "Gaming Monitor",
    manufacturer: "LG",
    price: 499.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "lg-27GL850-B.webp",
  },
  {
    id: 8,
    nombre: "Sony PlayStation 5",
    category: "Gaming Console",
    manufacturer: "Sony",
    price: 499.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "sony-playStation-5.webp",
  },
  {
    id: 9,
    nombre: "Microsoft Xbox Series X",
    category: "Gaming Console",
    manufacturer: "Microsoft",
    price: 499.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "microsoft-xbox-series-x.webp",
  },
  {
    id: 10,
    nombre: "Logitech G Pro X Superlight",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 149.99,
    envio: "envio rapido",
    stock: 2,
    rutaImagen: "logitech-g-pro-x-superlight.webp",
  },
];

let carrito = [];

let carritoRecuperado = localStorage.getItem("carrito");
if (carritoRecuperado) {
  carrito = JSON.parse(carritoRecuperado);
}

renderizarCarrito(carrito);

/* Carga de los productos en el sitio */
renderizarProductos(productosGamer, carrito);

function renderizarProductos(productosGamer, carrito) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";

  productosGamer.forEach((producto) => {
    let tarjeta = document.createElement("div");
    tarjeta.innerHTML = `
    <div class="card-productos">
          <div class="img-producto">
              <img src="assets/img/${producto.rutaImagen}" alt="">
          </div>
          <div class="descripcion-producto">
              <div class="disponibilidad-producto">
                <div class="tag-tipo-envio">
                    <span>${producto.envio}</span>
                </div>
                <div class="tag-disponibilidad">
                  <span>${
                    producto.stock > 0 ? "DISPONIBLE EN TIENDA" : ""
                  }</span>
                </div>
              </div>
              <div class="fabricante-producto">
                  <span>${producto.manufacturer}</span>
              </div>
              <div class="titulo-producto">
                  <span>${producto.nombre}</span>
              </div>
              <div class="categoria-producto">
                  <p>${producto.category}</p>
              </div>
              <div class="precio-producto">
                  <p>$${producto.price}</p>
              </div>
              <div class="btn-agregar">
                  <span id=${producto.id}>Agregar al carro</span>
              </div>
          </div>
      </div>
    `;

    if (producto.stock <= 0) {
      const tagDisponibilidad = tarjeta.querySelector(".tag-disponibilidad");
      tagDisponibilidad.style.display = "none";
    }
    contenedor.appendChild(tarjeta);

    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", (e) =>
      agregarProductoCarrito(productosGamer, carrito, e)
    );
  });
}
/* FIN */

/** Filtrar y mostrar la busqueda en Input **/

let buscador = document.getElementById("buscador");
let botonBuscar = document.getElementById("buscar");

botonBuscar.addEventListener("click", () => filtrarYRenderizar(productosGamer));

function filtrarYRenderizar(productosGamer) {
  let inputBusqueda = buscador.value.toUpperCase();
  let producutosFiltrados = productosGamer.filter((producto) =>
    producto.nombre.toUpperCase().includes(inputBusqueda)
  );
  renderizarProductos(producutosFiltrados);
}

/******************************************************************/
function agregarProductoCarrito(productosGamer, carrito, e) {
  let productoSolicitado = productosGamer.find(
    (producto) => producto.id === Number(e.target.id)
  );
  let productoAgregado = carrito.find(
    (producto) => producto.id === productoSolicitado.id
  );

  if (productoSolicitado.stock > 0) {
    if (productoAgregado) {
      productoAgregado.unidades++;
      productoAgregado.subtotal =
        productoAgregado.unidades * productoAgregado.precioUnitario;
    } else {
      carrito.push({
        id: productoSolicitado.id,
        imagen: productoSolicitado.rutaImagen,
        nombre: productoSolicitado.nombre,
        precioUnitario: productoSolicitado.price,
        unidades: 1,
        subtotal: productoSolicitado.price,
      });
    }
    productoSolicitado.stock--;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    lanzarTostada(
      `${productoSolicitado.nombre} agregado ✅`,
      "bottom",
      "right"
    );
  } else {
    alert("Producto agotado 😔");
  }
  renderizarCarrito(carrito);
}
/* FIN */

function renderizarCarrito(productosCarrito) {
  if (productosCarrito.length > 0) {
    let contenidoCarrito = document.getElementById("carrito");
    contenidoCarrito.innerHTML = "";

    productosCarrito.forEach((producto) => {
      let itemProductoCarrito = document.createElement("div");
      itemProductoCarrito.classList.add("contenedor-items-carrito");
      itemProductoCarrito.innerHTML = `
        <div class="imagen-producto-carrito">
          <img src="assets/img/${producto.imagen}" alt="">
          <div class="unidades-producto-carrito"
            <p>Cantidad: <span>${producto.unidades}</span></p>
          </div>
        </div>
        <div class="contenedor-info">
          <div class="nombre-producto-carrito"
            <span>${producto.nombre}</span>
          </div>
          <div class="precio-producto-carrito"
            <p>Precio Unitario: <span>${producto.precioUnitario}</span></p>
          </div>
          
          <div class="subtotal-producto-carrito"
            <p>Subtotal: <span>${producto.subtotal}</span></p>
          </div>
        </div>
      `;
      contenidoCarrito.appendChild(itemProductoCarrito);
    });

    let btnFinalzarCompra = document.createElement("button");
    btnFinalzarCompra.innerHTML = "Finalizar compra";
    btnFinalzarCompra.addEventListener("click", finalizarCompra);
    contenidoCarrito.appendChild(btnFinalzarCompra);
  }
}

function finalizarCompra() {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = "";
  localStorage.removeItem("carrito");
}

let mostrarCarrito = document.getElementById("showCarrito");
mostrarCarrito.addEventListener("click", toggleCarrito);

function toggleCarrito() {
  let carrito = document.getElementById("carrito");
  carrito.classList.toggle("ocultarCarrito");
}

function lanzarTostada(text, gravity, position) {
  Toastify({
    text,
    className: "info",
    style: {
      background: "linear-gradient(to right, #441b98, #fbe9fb)",
    },
    gravity,
    position,
  }).showToast();
}
