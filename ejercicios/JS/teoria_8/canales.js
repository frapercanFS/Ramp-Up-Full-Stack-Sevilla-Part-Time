async function getPeliculas() {
  let jsonResultado = await fetch("https://swapi.dev/api/films/").then(
    (respuesta) => respuesta.json()
  );
  let listaPeliculas = jsonResultado.results;

  let listaTitulos = listaPeliculas.map((film) => {
    return film.title;
  });
  let listaAnos = listaPeliculas.map((film) => {
    return parseInt(film.release_date.split("-")[0]);
  });
  return { titulos: listaTitulos, anos: listaAnos };
}

getPeliculas().then((respuesta) => {
  console.log(respuesta);
  const ctx = document.getElementById("myChart");

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels:respuesta.titulos,
      datasets: [
        {
          label: "Año de Lanzamiento",
          data: respuesta.anos,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
    },
  });
});
