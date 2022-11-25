import axios from 'axios';

export default async function ListGroups(setListKahoot) {
    let list;

    await axios({
        method: 'GET',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImVtYWlsIjoidXNlcjJAZ21haWwuY29tIiwiZXhwIjoxNjY5NDA0Mjc3LCJpc3MiOiJ3aGF0aXNpdCJ9.0Km1Z2Yc0Ogf8O5nwffjZupXBXTGbzL0qBMVwYTaDQI'
        },

    }) .then(function (response) {
        // handle success
        setListKahoot(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });


}