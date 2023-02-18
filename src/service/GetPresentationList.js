import axios from 'axios';

export default async function GetPresentationList(token, setPresentationList) {

    return await axios({
        method: 'GET',
        url: 'http://localhost:8000/v1/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
        setPresentationList(response.data.data.result)
        return(response.data.data.result)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}