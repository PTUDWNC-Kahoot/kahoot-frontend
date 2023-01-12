import axios from 'axios';

export default async function ServiceCreateNewPresentation(token, newPresentName, setCreateState, createPresentation) {

    const userId =
        await axios({
            method: 'GET',
            url: 'http://54.179.150.210:8000/v1/user/me',
            headers: {
                'Authorization': 'Bearer ' + token
            },

        }).then(function (response) {
            return response.data.data.result.id;
        })

    console.log(newPresentName, userId)

    await axios({
        method: 'POST',
        url: 'http://54.179.150.210:8000/v1/presentation',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            
            "owner": userId,
            "title": newPresentName
        }

    }).then(function (response) {
        // handle success
        setCreateState(true);
        createPresentation(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}