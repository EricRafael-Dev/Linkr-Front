import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function signUp (body){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)  
    console.log(process.env.REACT_APP_API_URL)  
    return promise;
}


function signOut(token){
    const promise = axios.delete(`${process.env.REACT_APP_API_URL}/sign-out`, createConfig(token))    
    return promise;
}

const apiAuth = { signUp, signOut };

export default apiAuth;

