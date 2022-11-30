import axios from 'axios';
import Login from './Login';

export default async function ListGroups(setListKahoot) {

    var user = await Login();
    const token  = user.token
    // await axios({
    //     method: 'POST',
    //     url: 'http://localhost:8000/auth/login',
    //     data: {
    //         "email":"19120580@student.hcmus.edu.vn",
    //         "password":"User12345678#"
    //     }

    // },).then(function (response) {
    //     // handle success
    //     token =(response.data.token)

    // })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    await axios({
        method: 'GET',
        url: 'http://localhost:8000/groups',
        headers: {
            'Authorization': 'Bearer ' + token
        },

    }).then(function (response) {
        // handle success
        console.log('succ')
        setListKahoot(response.data)
    })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log('fail')

        })
        .finally(function () {
            // always executed
        });


}