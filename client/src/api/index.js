import axios from "axios";




const API = axios.create({ baseURL: 'https://capstone-calculator-project.herokuapp.com/posts' });

export const fetchForms = () => API.get('/posts');
export const sendForm = (newForm) => API.post('/posts', newForm);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signin = (signFormData) => API.post('/users/signin', signFormData);
export const signup = (signFormData) => API.post('/users/signUp', signFormData);



