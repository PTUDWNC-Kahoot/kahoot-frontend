import axios from "axios";
import { useMutation } from "react-query";
import { Await, useNavigate } from "react-router-dom";

export default function SignOnGoogle() {
    
    
    const navigate = useNavigate();   
    // return await axios({
    //     method: 'GET',
    //     url: 'http://localhost:8000/google/login',
    // }).then(function (response) {
    //     //handle success
    //     navigate("/home");    
    // }).catch(function(error) {
    //     //handle error
    //     console.log('error');
    //     console.log(error);
    // })
    // .finally(function() {
    //     //always executed
    // });

    const {isError, error, mutate} = useMutation(
        getSignOn,
        {
            onSuccess: (res) => {
                navigate("/home");
            },
            onError: (err) => {

            }
        }
    );
    async function getSignOn() {
        return await axios.get("http://localhost:8000/google/login");
    }
    if (isError)
    {
       return <div>Fail</div>
    }
  
}