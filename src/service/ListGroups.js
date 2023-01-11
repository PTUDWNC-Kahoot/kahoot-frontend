import axios from 'axios';

export default async function ListGroups(token, setListKahoot) {
    await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/v1/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        console.log('succ')
        console.log(response.data);
        setListKahoot(response.data)
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