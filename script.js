const elMensaje = document.getElementById('mensajeFase');
const elDias = document.getElementById('dias');
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');

function actualizar() {
  const ahora = new Date();
  let anio = ahora.getFullYear();

  let inicioHalloween = new Date(anio, 9, 31, 0, 0, 0);
  let finHalloween = new Date(anio, 10, 1, 0, 0, 0);

  if (ahora >= finHalloween) {
    anio = anio + 1;
    inicioHalloween = new Date(anio, 9, 31, 0, 0, 0);
    finHalloween = new Date(anio, 10, 1, 0, 0, 0);
  }

  let objetivo;
  if (ahora < inicioHalloween) {
    objetivo = inicioHalloween;
    elMensaje.textContent = 'Aún falta para que empiece el terror...';
  } else {
    objetivo = finHalloween;
    elMensaje.textContent = '¡HALLOWEEN YA EMPEZÓ!';
  }

  const diferencia = objetivo - ahora;
  const segundosTotales = Math.floor(diferencia / 1000);

  const dias = Math.floor(segundosTotales / 86400);
  const horas = Math.floor((segundosTotales % 86400) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  elDias.textContent = dias;
  elHoras.textContent = horas;
  elMinutos.textContent = minutos;
  elSegundos.textContent = segundos;
}

actualizar();
setInterval(actualizar, 1000);