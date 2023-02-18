import axios from 'axios';

export default async function ServiceCreateNewPresentation(token, newPresentName, setCreateState, createNewPresentation) {

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
        url: 'http://localhost:8000/v1/presentations',
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
        console.log(response.data);
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