import axios from 'axios';

export const axiosPrivate = axios.create({
    // do i need a base url??
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})
