import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const url = import.meta.env.VITE_REACT_APP_TELESHOP_API

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'asdas')
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});


