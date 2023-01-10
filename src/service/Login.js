import axios from 'axios';

export default async function Login() {
    return await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/auth/login',
        data: {
            "email":"19120580@student.hcmus.edu.vn",
            "password":"User12345678#"
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