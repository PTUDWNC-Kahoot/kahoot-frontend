import axios from 'axios';
import Login from './Login'

export default async function GetGroupMemberList(group) {

    var token = await Login();

    await axios({
        method: 'POST',
        url: 'http://localhost:8000/groups/' + group.id,
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}