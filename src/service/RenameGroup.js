import axios from 'axios';
import Login from './Login'

export default async function RenameGroup(group, newName, setRenameState) {

    var user = await Login();
    const token = user.token;

    await axios({
        method: 'PUT',
        url: 'http://54.179.150.210:8000/groups/' + group.id,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data:{
            "name": newName
        }
       

    }).then(function (response) {
        // handle success
        setRenameState(true);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            setRenameState(false);

        })
        .finally(function () {
            // always executed
        });


}