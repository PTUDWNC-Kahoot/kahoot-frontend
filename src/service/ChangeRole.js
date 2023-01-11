import axios from 'axios';

export default async function  RenameGroup(token, group, userId, newRole, setAssignRole) {

    console.log(userId, newRole)
    return await axios({
        method: 'PUT',
        url: 'http://54.179.150.210:8000/v1/groups/' + group.id + '/assign-role',
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