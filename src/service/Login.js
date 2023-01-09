import axios from 'axios';

export default async function Login() {
    return await axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/login',
        data: {
            "email":"HelloKahoot@gmail.com",
            "password":"25c27e4effb54da89ab7b3330abe39ec"
        }

    },).then(function (response) {
        // handle success
        return(response.data)

    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}