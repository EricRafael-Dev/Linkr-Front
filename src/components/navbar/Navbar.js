import { useState } from "react";
import { Container, ContainerInput, ContainerUserClosed, ContainerUserOpened } from "./styled.js";
import { BiSearch, BiChevronDown, BiChevronUp } from "react-icons/bi/index.esm.js";
import apiAuth from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [openLogout, setOpenLogout] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    function handleLogout() {
        setOpenLogout(true)
    }

    function handleCloseLogout() {
        setOpenLogout(false)
    }

    function logout(){
       
        apiAuth.signOut(token)
            .then(res =>{
                console.log(token)
                navigate("/")
               
            })
            .catch(err =>{
                console.log(token)
                console.log(err.response.data)
                alert(err.response.data.message|| err.message)
            })
    }

    return (
        <Container >
            <p onClick={handleCloseLogout}>linkr</p>
            <ContainerInput onClick={handleCloseLogout}>
                <input placeholder="Search for people" ></input>
                <BiSearch className={"searchInput"} onClick={handleCloseLogout} />

            </ContainerInput>

            {openLogout === false ? (
                <ContainerUserClosed onClick={handleLogout}>
                    <button > <BiChevronDown /> </button>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-aB5brTmpeDnB_5cPXLxQl-j0khXeQl25-xewz8n7M08IFk7mt3BV-TKlK77AgTMhLA&usqp=CAU"} alt={"Foto de perfil do usuário"} />
                </ContainerUserClosed>

            ) : (
                <ContainerUserOpened>
                    <div>
                        <button onClick={handleCloseLogout}> <BiChevronUp /> </button>
                        <img onClick={handleCloseLogout} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-aB5brTmpeDnB_5cPXLxQl-j0khXeQl25-xewz8n7M08IFk7mt3BV-TKlK77AgTMhLA&usqp=CAU"} alt={"Foto de perfil do usuário"} />
                    </div>
                    <button className="logoutButton" type="submit" onClick={logout}> Logout </button>
                </ContainerUserOpened>
            )}

        </Container>
    )

    /*
        icon para busca  <BiSearch />
        icon ^  seta pra cima: <BiChevronUp />
        icon    seta pra baixo :  <BiChevronDown />

    */
};
