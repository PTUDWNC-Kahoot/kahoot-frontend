import axios from "axios";
import { useMutation } from "react-query";
import { Await, useNavigate } from "react-router-dom";

export default async function SignOnGoogle() {
    
  
      
    //   app.post('/', function(req, res, next) {
    //    // Handle the post for this route
    //   });

    // axios.get('http://localhost:8000/google/login')
    // .then(response => {
    //     // Handle response
    //     console.log("HEHE1");
    //     // console.log(response.data);
    // })
    // .catch(err => {
    //     // Handle errors
    //     console.error(err);
    // });
    
    // try {
    //     const res = await axios.get('http://localhost:8000/google/login');
    // } catch (error) {
    //     // Handle errors
    // }
    const navigate = useNavigate();   
    await axios({
        method: 'GET',
        url: 'http://localhost:8000/google/login',
        headers: {"Access-Control-Allow-Origin": "*"}
    }).then(function (response) {
        //handle success
        navigate("/home");    
    }).catch(function(error) {
        //handle error
        console.log('error');
        console.log(error);
    })
    // .finally(function() {
    //     //always executed
    // });

    // const {isError, error, mutate} = useMutation(
    //     getSignOn,
    //     {
    //         onSuccess: (res) => {
    //             navigate("/home");
    //         },
    //         onError: (err) => {

    //         }
    //     }
    // );
    // async function getSignOn() {
    //     return await axios.get("http://localhost:8000/google/login");
    // }
    // if (isError)
    // {
    //    return <div>Fail</div>
    // }
  
}