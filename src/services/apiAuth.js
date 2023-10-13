import axios from "axios";

function signUp (body){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)  
    console.log(process.env.REACT_APP_API_URL)  
    return promise;
}


function signOut(){
    const promise = axios.delete(`${process.env.REACT_APP_API_URL}/signout`)    
    return promise;
}

const apiAuth = { signUp, signOut };

export default apiAuth;

