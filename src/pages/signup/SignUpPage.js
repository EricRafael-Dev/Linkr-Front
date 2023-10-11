import { useState } from "react";
import { ContainerLogo, ContainerSignUp, ContainerSignUpPage } from "./styled.js";
import { Link} from "react-router-dom";
import apiAuth from "../../services/apiAuth.js";



export default function SignUp() {
    const [form, setForm] = useState({ email: "", password: "", username: "", photo: "" })
    //const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    function signup(e) {
        e.preventDefault()

        if (form.email.length === 0 || form.password.length === 0 || form.username.length === 0 || form.photo.length === 0) {
            return alert("Preencha todos os campos")
        }
        
        apiAuth.signUp(form)
            .then(res =>{
                alert("Usuario cadastrado com sucesso")
            })
            .catch(err =>{
               
                console.log(err.response.data)
                alert(err.response.data.message)
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
                    <input name="email" placeholder="  e-mail" type="email" required value={form.email} onChange={handleForm} />
                    <input name="password" placeholder="  password" type="password" value={form.password} onChange={handleForm} required />
                    <input name="username" placeholder="  username" type="text" required value={form.name} onChange={handleForm} />
                    <input name="photo" placeholder="  picture url" type="url" value={form.photo} onChange={handleForm} required />

                    <button type="submit" > Sign Up </button>
                    <Link to={'/'}>
                        <div> Switch back to log in </div>
                    </Link>
                </form>
            </ContainerSignUp>
        </ContainerSignUpPage>
    )
}
