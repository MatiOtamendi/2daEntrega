
function esMayorDeEdad() {
  let edad = localStorage.getItem("edad");
  if (edad == null) {
    edad = prompt("Por favor, ingrese su edad (valor numérico)");
  }
  localStorage.setItem("edad", edad);
  // if (edad < 18) {
  //   alert("Eres menor de edad, no puedes alquilar, vuelve cuando tengas 18 años o mas.");
  //   return false;
  // } else {
  //   alert(
  //     "Bienvenid@!!, podes ver nuestro catálogo de vehiculos y alquilar el que te guste!"
  //   );
  //   return true;
  // }
  /*APLICO OPERADOR TERNARIO SUPLANTANDO LINEAS 59 A 67*/
edad < 18? alert("Eres menor de edad, no puedes alquilar, vuelve cuando tengas 18 años o mas.") : Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Bienvenid@! Podes ver nuestro catalogo y reservar el vehiculo que te guste!',
  showConfirmButton: true,
  timer: 5000
});
};
esMayorDeEdad();

// const tablaVehiculos = () => {
//     let contenedor = document.getElementById("container");
//     vehiculos.forEach((vehiculo) => {
//         let card = document.createElement("div");
//         card.classList.add("card", "col-sm-12", "col-lg-3");
//         card.innerHTML = `<img src="${vehiculo.imagen}" class="card-img-top" alt="foto del auto">
//         <div class="card-body">
//           <h5 class="card-title">${vehiculo.modelo}</h5>
//           <p class="card-text">${vehiculo.precio}</p>
//           <a href="reserva.html" class="btn btn-primary" onClick="reservarVehiculo()" >Lo quiero!</a>
//         </div>`;
//         contenedor.appendChild(card);
//     }
//     );
// };
// tablaVehiculos();

const vehiculos = document.querySelector("#container");
fetch("/data.json")
  .then((res) => res.json())
  .then((vehiculos) => {
    vehiculos.forEach((vehiculo) => {
      let contenedor = document.getElementById("container");
      let card = document.createElement("div");
      card.classList.add("card", "col-sm-12", "col-lg-3");
      card.innerHTML = `<img src="${vehiculo.imagen}" class="card-img-top" alt="foto del auto">
               <div class="card-body">
                 <h5 class="card-title">${vehiculo.modelo}</h5>
                 <p class="card-text">${vehiculo.precio}</p>
                <a href="reserva.html" class="btn btn-primary" onClick="reservarVehiculo()" >Lo quiero!</a>
              </div>`;
      contenedor.appendChild(card);
    });
  });



const reservarVehiculo = () => {
 alert("Felicitaciones! Reservaste tu vehículo!")
};