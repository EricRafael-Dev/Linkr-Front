import { Container, ContainerInput, ContainerUser } from "./styled.js";

import { BiChevronDown, BiSearch } from "react-icons/bi";
export default function Navbar() {

    return (
        <Container>
                <p>linkr</p>
                <ContainerInput>
                    <input placeholder="Search for people"  ></input>
                    <BiSearch />
                    
                </ContainerInput>
                <ContainerUser>
                    <button> <BiChevronDown /> </button>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-aB5brTmpeDnB_5cPXLxQl-j0khXeQl25-xewz8n7M08IFk7mt3BV-TKlK77AgTMhLA&usqp=CAU"} alt={"Foto de perfil do usuário"} />
                </ContainerUser>
        </Container>
    )

    /*
        icon para busca  <BiSearch />
        icon ^  seta pra cima: <BiChevronUp />
        icon    seta pra baixo :  <BiChevronDown />

    */
};
