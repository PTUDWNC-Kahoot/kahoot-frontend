import axios from 'axios';

export default async function ServiceGroupCreateNewPresentation(group, token, newPresentName, setCreateState, createNewPresentation) {
    
    console.log(group);
    
    return await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/v1/groups/' + group.id + '/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            // "name": newPresentName,
            // "owner": userId,
            "group_id": group.id,
            "title": newPresentName,
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createNewPresentation(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}