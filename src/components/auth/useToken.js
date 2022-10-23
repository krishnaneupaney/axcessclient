import {useState} from 'react';

export const useToken = () => {
    const [token, setTokenInternal ] = useState(() =>{
        return localStorage.getItem('token');

    });

    const setToken = newToken => {
        localStorage.setItem('token');
        setTokenInternal(newToken);
    }

    return [token, setToken];
}