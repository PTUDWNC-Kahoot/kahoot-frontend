import axios from 'axios';
import Login from './Login'

export default async function CreateNewGroup(newNameGroup, setCreateState, createGroup) {

    var token = await Login();

    await axios({
        method: 'POST',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data:{
            "name": newNameGroup
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createGroup(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}