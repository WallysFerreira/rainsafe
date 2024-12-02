import { API_BASE_URL, IBGE_PE_CITIES_URL } from '$env/static/private';

export async function load({ fetch, params }) {
  const res = await fetch(IBGE_PE_CITIES_URL);
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

    console.log(JSON.stringify(user));

    const res = await fetch(API_BASE_URL + "/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    console.log(res);
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
      numero: formData.get("number").toString(),
      bairro: formData.get("neighbourhood"),
      cidade: formData.get("city")
    }
  }
}
