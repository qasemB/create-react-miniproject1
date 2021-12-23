import axios from 'axios';

export const jpAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers:{
    //     Authorization: "Bearer 6sd5f6ds4fd6s54f69d5f469ds5f4dsf54d...",
    //     "Content-Type" : "application/json"
    // },
    timeout: 5000,
    timeoutErrorMessage: "زمان پاسخگویی بیش از 5 ثانیه طول کشید...!"    
})