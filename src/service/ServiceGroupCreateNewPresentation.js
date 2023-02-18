import axios from 'axios';

export default async function ServiceGroupCreateNewPresentation(group, token, newPresentName, setCreateState, createNewPresentation) {
  
    const userId =
    await axios({
        method: 'GET',
        url: 'http://localhost:8000/v1/user/me',
        headers: {
            'Authorization': 'Bearer ' + token
        },
     
    }).then(function (response) {
       return response.data.data.result.id;
    })  
    await axios({
        method: 'POST',
        url: 'http://localhost:8000/v1/groups/' + group.id + '/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            // "name": newPresentName,
            // "owner": userId,
            "group_id": group.id,
            "owner": userId,
            "title": newPresentName,
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createNewPresentation(response.data);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}