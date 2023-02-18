import axios from 'axios';

export default async function GetUserId(token) {
    

    const userId =
        await axios({
            method: 'GET',
            url: 'http://localhost:8000/v1/user/me',
            headers: {
                'Authorization': 'Bearer ' + token
            },
         
        }).then(function (response) {
           
           // console.log(response.data.data.result.id);
            return response.data.data.result.id;
        })
        .then(function (response) {
        // handle success
             console.log("success")
            })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}