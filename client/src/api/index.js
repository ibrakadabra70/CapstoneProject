import axios from "axios";




const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchForms = () => API.get('/posts');
export const sendForm = (newForm) => API.post('/posts', newForm);



