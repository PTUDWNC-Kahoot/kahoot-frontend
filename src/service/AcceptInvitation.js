import axios from 'axios';

export default async function AcceptInvitation(token, setAcceptState, groupCode ) {

    await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/v1/groups/join-group/' + groupCode,
        headers: {
            'Authorization': 'Bearer ' + token
        },
      
    }).then(function (response) {
        // handle success
        setAcceptState(true);
        console.log('Joined')
    })
        .catch(function (error) {
            // handle error
            setAcceptState(false);
            console.log('Join fail')

            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}