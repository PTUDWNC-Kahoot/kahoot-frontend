import axios from 'axios';

export default async function ListPresentation(token, setListPresentation) {

    
    await axios({
        method: 'GET',
        url: 'http://localhost:8000/v1/groups/1/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        // console.log('succ')
        // console.log(response.data)
        
        console.log(response.data.data.result);
        setListPresentation(response.data.data.result);
        
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log('fail')

        })
        .finally(function () {
            // always executed
        });


}