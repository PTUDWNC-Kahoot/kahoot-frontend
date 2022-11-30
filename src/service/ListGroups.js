import axios from 'axios';
import Login from './Login';

export default async function ListGroups(setListKahoot) {

    var token =await Login();

    await axios({
        method: 'GET',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        setListKahoot(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}