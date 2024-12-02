export async function load({ fetch, params }) {
  const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/PE/municipios");
  const rawCities = await res.json();
  let cityNames = rawCities.map(city => city.nome);

  return {
    "cityNames": cityNames
  };

}

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const user = makeApiCompatibleUserFromFormData(data);

    console.log(user);
  }
}

function makeApiCompatibleUserFromFormData(formData) {
  return {
    nomeCompleto: formData.get("fullName"),
    telefone: formData.get("phone"),
    email: formData.get("email"),
    senha: formData.get("password"),
    endereco: {
      rua: formData.get("street"),
      numero: formData.get("number"),
      bairro: formData.get("neighbourhood"),
      cidade: formData.get("city")
    }
  }
}
