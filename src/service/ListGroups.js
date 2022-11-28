import axios from 'axios';
import GetToken from './GetToken';
import Login from './Login';
import { useEffect } from 'react';
import React from 'react';

export default async function ListGroups(setListKahoot) {

    var token;

    await axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/login',
        data: {
            "email": "19120580@student.hcmus.edu.vn",
            "password": "User12345678#"
        }

    },).then(function (response) {
        // handle success
        const tokenContext = React.createContext(response.data.token);

        token = response.data.token
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    await axios({
        method: 'GET',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        setListKahoot(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}