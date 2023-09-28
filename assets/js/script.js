let productosGamer = [
  {
    id: 1,
    nombre: "Logitech G502",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 49.99,
    stock: 2,
    rutaImagen: "logitech-g502.webp",
  },
  {
    id: 2,
    nombre: "Razer BlackWidow Elite",
    category: "Gaming Keyboard",
    manufacturer: "Razer",
    price: 169.99,
    stock: 2,
    rutaImagen: "razer-blackWidow-elite.webp",
  },
  {
    id: 3,
    nombre: "SteelSeries Arctis Pro",
    category: "Gaming Headset",
    manufacturer: "SteelSeries",
    price: 179.99,
    stock: 2,
    rutaImagen: "steelSeries-arctis-pro.webp",
  },
  {
    id: 4,
    nombre: "ASUS ROG Strix GeForce RTX 3080",
    category: "Graphics Card",
    manufacturer: "ASUS",
    price: 699.99,
    stock: 2,
    rutaImagen: "asus-rog-strix-geforce-rtx-3080.webp",
  },
  {
    id: 5,
    nombre: "HyperX Alloy Origins",
    category: "Gaming Keyboard",
    manufacturer: "HyperX",
    price: 109.99,
    stock: 2,
    rutaImagen: "hyperx-alloy-origins.webp",
  },
  {
    id: 6,
    nombre: "Corsair K70 RGB MK.2",
    category: "Gaming Keyboard",
    manufacturer: "Corsair",
    price: 159.99,
    stock: 2,
    rutaImagen: "corsair-K70-rgb-mk-2.webp",
  },
  {
    id: 7,
    nombre: "LG 27GL850-B",
    category: "Gaming Monitor",
    manufacturer: "LG",
    price: 499.99,
    stock: 2,
    rutaImagen: "lg-27GL850-B.webp",
  },
  {
    id: 8,
    nombre: "Sony PlayStation 5",
    category: "Gaming Console",
    manufacturer: "Sony",
    price: 499.99,
    stock: 2,
    rutaImagen: "sony-playStation-5.webp",
  },
  {
    id: 9,
    nombre: "Microsoft Xbox Series X",
    category: "Gaming Console",
    manufacturer: "Microsoft",
    price: 499.99,
    stock: 2,
    rutaImagen: "microsoft-xbox-series-x.webp",
  },
  {
    id: 10,
    nombre: "Logitech G Pro X Superlight",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 149.99,
    stock: 2,
    rutaImagen: "logitech-g-pro-x-superlight.webp",
  },
];

let contenedor = document.getElementById("contenedorProductos");

productosGamer.forEach((producto) => {
  let tarjeta = document.createElement("div");
  tarjeta.innerHTML = `
  <div class="card-productos">
        <div class="img-producto">
            <img src="assets/img/${producto.rutaImagen}" alt="">
        </div>
        <div class="descripcion-producto">
            <div class="disponibilidad-producto">
                <span>ENVIO RAPIDO</span>
                <span>DISPONIBLE EN TIENDA</span>
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
                <p>${producto.price}</p>
            </div>
            <div class="stock-producto">
                <p>${producto.stock}</p>
            </div>
        </div>
    </div>
  `;

  contenedor.appendChild(tarjeta);
});
