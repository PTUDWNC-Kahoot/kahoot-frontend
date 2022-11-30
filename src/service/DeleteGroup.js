import axios from 'axios';
import Login from './Login'

export default async function DeleteGroup(group, setDeleteState) {

    var user = await Login();
    const token = user.token;

    await axios({
        method: 'DELETE',
        url: 'http://localhost:8000/groups/' + group.id,
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
        setDeleteState(true);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            setDeleteState(false);

        })
        .finally(function () {
            // always executed
        });


}