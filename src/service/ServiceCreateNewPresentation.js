import axios from 'axios';
import Login from './Login'

export default async function ServiceCreateNewPresentation(newPresentName, setCreateState, createPresentation) {

    var user = await Login();
    const token = user.token;

    console.log(newPresentName, user.id)

    await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/v1/presentation',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data:{
            "name": newPresentName,
            "adminId": user.id
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createPresentation(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}