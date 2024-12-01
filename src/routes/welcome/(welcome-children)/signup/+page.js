export const load = async ({ fetch, params }) => {
  const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/PE/municipios");
  const rawCities = await res.json();
  let cityNames = rawCities.map(city => city.nome);

  return {
    "cityNames": cityNames
  };

}
