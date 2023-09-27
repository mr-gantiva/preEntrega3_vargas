let productosGamer = [
  {
    id: 1,
    nombre: "Logitech G502",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 49.99,
    stock: 2,
  },
  {
    id: 2,
    nombre: "Razer BlackWidow Elite",
    category: "Gaming Keyboard",
    manufacturer: "Razer",
    price: 169.99,
    stock: 2,
  },
  {
    id: 3,
    nombre: "SteelSeries Arctis Pro",
    category: "Gaming Headset",
    manufacturer: "SteelSeries",
    price: 179.99,
    stock: 2,
  },
  {
    id: 4,
    nombre: "ASUS ROG Strix GeForce RTX 3080",
    category: "Graphics Card",
    manufacturer: "ASUS",
    price: 699.99,
    stock: 2,
  },
  {
    id: 5,
    nombre: "HyperX Alloy Origins",
    category: "Gaming Keyboard",
    manufacturer: "HyperX",
    price: 109.99,
    stock: 2,
  },
  {
    id: 6,
    nombre: "Corsair K70 RGB MK.2",
    category: "Gaming Keyboard",
    manufacturer: "Corsair",
    price: 159.99,
    stock: 2,
  },
  {
    id: 7,
    nombre: "LG 27GL850-B",
    category: "Gaming Monitor",
    manufacturer: "LG",
    price: 499.99,
    stock: 2,
  },
  {
    id: 8,
    nombre: "Sony PlayStation 5",
    category: "Gaming Console",
    manufacturer: "Sony",
    price: 499.99,
    stock: 2,
  },
  {
    id: 9,
    nombre: "Microsoft Xbox Series X",
    category: "Gaming Console",
    manufacturer: "Microsoft",
    price: 499.99,
    stock: 2,
  },
  {
    id: 10,
    nombre: "Logitech G Pro X Superlight",
    category: "Gaming Mouse",
    manufacturer: "Logitech",
    price: 149.99,
    stock: 2,
  },
];

let contenedor = document.getElementById("contenedorProductos");

productosGamer.forEach((producto) => {
  let tarjeta = document.createElement("div");
  tarjeta.innerHTML = `<h3> ${producto.nombre} </h3>`;

  contenedor.appendChild(tarjeta);
});
