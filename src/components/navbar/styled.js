import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #151515;
height: 72px;


p{
    margin-left: 20px;
    color: #FFF;
    font-family: 'Passion One', sans-serif;
    font-size: 60px;
    font-weight: 700;
}

  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }

`
export const ContainerInput = styled.div`
display: flex;
align-items: center;
gap: 6px;
width: 573px;
color: #C6C6C6;
font-family: 'Lato';
font-size: 19px;
font-weight: 400;

input:focus {
  border: none;
  margin: 0;
}

@media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    input {
        width: calc(100% - 18%);
        font-family: 'Oswald', sans-serif;
    }

}

`

export const ContainerUser = styled.div`
display: flex;
align-items: center;
width: 100px;

button {
    background-color: transparent;
}


img{
    width: 60px;
    border-radius: 60px;
}

`