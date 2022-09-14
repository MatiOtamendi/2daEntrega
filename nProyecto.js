let vehiculos = [
  {
    id: 1,
    modelo: "Shelby Cobra",
    precio: 2000,
    imagen: "./imagenes/shelbyCobra.png",
  },
  {
    id: 2,
    modelo: "Pontiac GTO",
    precio: 3000,
    imagen: "./imagenes/PontiacGTO.png",
  },
  {
    id: 3,
    modelo: "Nissan GTR",
    precio: 3500,
    imagen: "./imagenes/Nissan.png",
  },
  {
    id: 4,
    modelo: "Ford Mustang",
    precio: 3700,
    imagen: "./imagenes/Mustang.png",
  },
  {
    id: 5,
    modelo: "Ferrari F40",
    precio: 4500,
    imagen: "./imagenes/Ferrari.png",
  },
  {
    id: 6,
    modelo: "Corvette",
    precio: 3200,
    imagen: "./imagenes/Corvette.png",
  },
  {
    id: 7,
    modelo: "Dodge Charger",
    precio: 4000,
    imagen: "./imagenes/Charger.png",
  },
  {
    id: 8,
    modelo: "Chevrolet Bel Air",
    precio: 5000,
    imagen: "./imagenes/BelAir.png",
  },
  
];

const tablaVehiculos = () => {
    let contenedor = document.getElementById("container");
    vehiculos.forEach((vehiculo) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML = `<img src="${vehiculo.imagen}" class="card-img-top" alt="foto del auto">
        <div class="card-body">
          <h5 class="card-title">${vehiculo.modelo}</h5>
          <p class="card-text">${vehiculo.precio}</p>
          <a href="reserva.html" class="btn btn-primary" onClick="reservarVehiculo()" >Lo quiero!</a>
        </div>`;
        contenedor.appendChild(card);
    }
    );
};
tablaVehiculos();

const reservarVehiculo = () => {
    alert("Reservaste el vehículo!");
};