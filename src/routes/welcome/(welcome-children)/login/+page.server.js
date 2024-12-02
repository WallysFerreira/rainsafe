import { API_BASE_URL } from '$env/static/private';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const loginData = {
      email: data.get("email"),
      senha: data.get("password")
    }

    const res = await fetch(API_BASE_URL + "/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    const apiResponse = await res.json();
    cookies.set("sessionToken", apiResponse.data.token, { path: '/' });
  }
}
