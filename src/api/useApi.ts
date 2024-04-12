import apiUrl from "./apiUrl";

type PutTopImage = {
  uid: string;
  image?: File[];
  productText?: string | null;
  learningText?: string | null;
  profileText?: string | null;
  contactText?: string | null;
};

type LoginType = {
  loginId: string;
  password: string;
};

const { PUT_TOP_DATA_URL, CHECK_AUTH_URL } = apiUrl;

export const putTopData = async ({ uid, image, productText, learningText, profileText, contactText }: PutTopImage) => {
  try {
    const data = {
      uid: uid,
      image: image,
      productText: productText,
      learningText: learningText,
      profileText: profileText,
      contactText: contactText,
    };

    const headers = {
      'Content-type': 'Application/json',
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };

    const response: Response = await fetch(PUT_TOP_DATA_URL, options);
    return response.json();
  } catch (error) {
    console.error(error)
    return error;
  }
};

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