import { useState } from "react";
import { ContainerLogo, ContainerSignUp, ContainerSignUpPage } from "./styled.js";
import { Link, useNavigate} from "react-router-dom";
import apiAuth from "../../services/apiAuth.js";



export default function SignUpPage() {
    const [form, setForm] = useState({ email: "", password: "", username: "", photo: "" })
    const [send, setSend] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    function signup(e) {
        e.preventDefault()

        if (form.email.length === 0 || form.password.length === 0 || form.username.length === 0 || form.photo.length === 0) {
            return alert("Preencha todos os campos")
        }

        setSend(true);
        
        apiAuth.signUp(form)
            .then(res =>{
                navigate("/")
               
            })
            .catch(err =>{
                setSend(false);
               
                console.log(err.response.data)
                alert(err.response.data.message || err.message)
            })
        
    }


    return (
        <ContainerSignUpPage>
            <ContainerLogo>
                <div>
                    <h1> linkr </h1>
                    <p> save, share and discover
                        the best links on the web </p>
                </div>

            </ContainerLogo>
            <ContainerSignUp>
                <form onSubmit={signup}>
                    <input data-test="email" name="email" placeholder="  e-mail" type="email" required value={form.email} onChange={handleForm} />
                    <input data-test="password" name="password" placeholder="  password" type="password" value={form.password} onChange={handleForm} required />
                    <input data-test="username" name="username" placeholder="  username" type="text" required value={form.name} onChange={handleForm} />
                    <input  data-test="picture-url" name="photo" placeholder="  picture url" type="url" value={form.photo} onChange={handleForm} required />

                    <button data-test="sign-up-btn" type="submit" disabled={send}>
                         Sign Up 
                    </button>
                    <Link to={'/'} data-test="login-link">
                        <div> Switch back to log in </div>
                    </Link>
                </form>
            </ContainerSignUp>
        </ContainerSignUpPage>
    )
}
