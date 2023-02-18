import axios from 'axios';

export default async function CreateNewGroup(token, newNameGroup, setCreateState, createGroup) {

    const userId =
        await axios({
            method: 'GET',
            url: 'http://localhost:8000/v1/user/me',
            headers: {
                'Authorization': 'Bearer ' + token
            },
         
        }).then(function (response) {
           return response.data.id
        })

    await axios({
        method: 'POST',
        url: 'http://localhost:8000/v1/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            "name": newNameGroup,
            "adminId": userId
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createGroup(response.data)
        console.log(response)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}