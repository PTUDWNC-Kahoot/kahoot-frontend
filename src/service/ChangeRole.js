import axios from 'axios';
import Login from './Login'

export default async function RenameGroup(group, userId, newRole, setAssignRole) {

    var user = await Login();
    const token = user.token;

    return await axios({
        method: 'PUT',
        url: 'http://localhost:8000/groups/' + group.id + '/assign-role',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            "userId": userId,
            "role": newRole
        }


    }).then(function (response) {
        // handle success
        setAssignRole(true);
        return true;
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            setAssignRole(false);
            return false;
        })
        .finally(function () {
            // always executed
        });


}