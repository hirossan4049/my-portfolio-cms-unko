import apiUrl from "./apiUrl";

type LoginType = {
  loginId: string;
  password: string;
};

const { CHECK_AUTH_URL } = apiUrl;

export const checkAuth = async ({ loginId, password }: LoginType) => {
  try {
    const data = {
      type: 'checkAuth',
      loginId: loginId,
      password: password,
    };

    const headers = {
      'Content-type': 'Application/json',
    };

    const options = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
    };

    const response: Response = await fetch(CHECK_AUTH_URL, options);
    return response.json();
  } catch (error) {
    return error;
  }
};