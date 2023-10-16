import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #171717;
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
width: 473px;
gap: 106px;
background-color: #fff;
color: #C6C6C6;
border-radius: 5px;
font-family: 'Lato';
font-size: 19px;
font-weight: 400;

input {
  border: none;
}
input:focus {
  border: none;
  margin: 0;
}
.searchInput {
  color:#C6C6C6;
  background-color: transparent;
  width: 40px;
  height: 60px;
  

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

export const ContainerUserClosed = styled.div`
display: flex;
align-items: center;
width: 120px;
margin-right: 20px;

button {
    background-color: transparent;
    width: 60px;
}

img{
    width: 60px;
    border-radius: 60px;
}

`

export const ContainerUserOpened = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 120px;
margin-right: 20px;

div {
  display: flex;
  align-items: center;
}

button {
    background-color: transparent;
    width: 60px;
}

img{
    width: 60px;
    border-radius: 60px;
}

.logoutButton{
  background-color: #171717;
  width: 150px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 17px;
  position: fixed;
  right: 8px;
  top: 55px;
  margin-top: 20px;
}

`