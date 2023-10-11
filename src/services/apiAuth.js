import axios from "axios";

function signUp (body){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)  
    console.log(process.env.REACT_APP_API_URL)  
    return promise;
}

const apiAuth = { signUp };

export default apiAuth;

