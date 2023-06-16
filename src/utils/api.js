import axios from "axios";

const faceDetectApi = axios.create({
  baseURL: 'https://face-app-be.onrender.com'
});

export const signInUser = (email, password) => {
  return faceDetectApi.post('/signin', { email, password }).then(({ data }) => {
    return data;
  });
};

export const registerUser = (name, email, password) => {
  return faceDetectApi.post('/register', { name, email, password }).then(({ data }) => {
    return data;
  });
};

export const imageSubmit = (id) => {
  return faceDetectApi.put('/image', { id }).then(({ data }) => {
    return data;
  });
};