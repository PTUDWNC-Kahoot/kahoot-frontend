import axios from 'axios';

export default async function DeleteGroup(token, group, setDeleteState) {

    await axios({
        method: 'DELETE',
        url: 'http://localhost:8000/v1/groups/' + group.id,
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