import axios from 'axios';

export default async function SignOnGoogle() {
    return await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/google/login',
       
    },).then(function (response) {
        // handle success
        return (response.data)

    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}