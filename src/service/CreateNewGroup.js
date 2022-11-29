import axios from 'axios';

import React from 'react';

export default async function CreateNewGroup(newNameGroup, setCreateState, createGroup) {

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
        method: 'POST',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data:{
            "name": newNameGroup
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createGroup(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}