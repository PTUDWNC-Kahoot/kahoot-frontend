import axios from 'axios';

export default async function DeleteGroupPresentation(token, presentation, setDeleteState) {

    await axios({
        method: 'DELETE',
        url: 'http://54.179.150.210:8000/v1/presentations',
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