import axios from 'axios';

export default async function GetPresentationList(token, setPresentationList) {

    return await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/v1/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
        setPresentationList(response.data.users)
        return(response.data.users)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}