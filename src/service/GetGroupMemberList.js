import axios from 'axios';

export default async function GetGroupMemberList(token, group,setGroupListMember) {

 
    return await axios({
        method: 'GET',
        url: 'http://54.179.150.210:8000/v1/groups/' + group.id,
        headers: {
            'Authorization': 'Bearer ' + token
        },
       

    }).then(function (response) {
        // handle success
        setGroupListMember(response.data.users)
        return(response.data.users)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}