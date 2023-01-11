import axios from 'axios';
import Login from './Login';

export default async function ListPresentation(setListPresentation) {

    
    var user = await Login();
    const token  = user.token

    await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/v1/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        console.log('succ')
        console.log(response.data);
        setListPresentation(response.data)
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