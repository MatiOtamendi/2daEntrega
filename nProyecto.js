function esMayorDeEdad() {
  let edad = localStorage.getItem("edad");
  if (edad == null) {
    edad = prompt("Por favor, ingrese su edad (valor numérico)");
  }
  localStorage.setItem("edad", edad);

edad < 18? Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'Eres menor de edad, vuelve cuando cumplas 18!',
  showConfirmButton: true,
  timer: 5000
}) : Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Bienvenid@! Podes ver nuestro catalogo y reservar el vehiculo que te guste!',
  showConfirmButton: true,
  timer: 5000
});
};
esMayorDeEdad();

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