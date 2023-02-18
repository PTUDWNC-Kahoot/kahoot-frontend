import axios from 'axios';

export default async function RenameGroup(token, group, newName, setRenameState) {

     await axios({
        method: 'PUT',
        url: 'http://localhost:8000/v1/groups/' + group.id,
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