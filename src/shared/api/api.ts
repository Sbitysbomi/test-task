import axios from 'axios';

const url = import.meta.env.VITE_REACT_APP_TELESHOP_API

export const $api = axios.create({
    baseURL: url,
    headers: {

        authorization: 'amshfbkafh',
    },
});
