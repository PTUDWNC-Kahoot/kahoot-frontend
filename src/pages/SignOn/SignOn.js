import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function SignOn () {
   
    let user = {};
    const navigate = useNavigate();
    const {isLoading, isError, isSuccess, mutate} = useMutation(
        getData,
        {
            onSuccess: (res) => {

            },
            onError: (err) => {

            },
        }
    );
    async function getData () 
    {
        return await axios.get("http://localhost:8000/google/login", user);
    }
    if (isSuccess) {
        navigate('/login');
    }
    return(
      <div>  Please login with your Google Account</div>
    )
}