import axios from 'axios';
import Login from './Login'

export default async function CreateNewGroup(newNameGroup, setCreateState, createGroup) {

    var user = await Login();
    const token = user.token;

    await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data:{
            "name": newNameGroup,
            "adminId": user.id
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