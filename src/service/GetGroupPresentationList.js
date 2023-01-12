import axios from 'axios';

export default async function GetGroupPresentationList(token, group,setGroupPresentationList) {

    console.log(group);
    return await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/v1/groups/'+ group.id + '/presentations',
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
        console.log(response.data);

        console.log(response.data.data.result);
        setGroupPresentationList(response.data.data.result);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}