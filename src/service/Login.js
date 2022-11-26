import axios from 'axios';

export default async function Login(setToken) {
    await axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/login',
        data: {
            "email": "user2@gmail.com",
            "password": "user12345678"
        }

    },).then(function (response) {
        // handle success
        
        return(response.data.token)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}