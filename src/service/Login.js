import axios from 'axios';

export default async function Login(setToken) {
    await axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/login',
        data: {
            "email":"19120580@student.hcmus.edu.vn",
            "password":"User12345678#"
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