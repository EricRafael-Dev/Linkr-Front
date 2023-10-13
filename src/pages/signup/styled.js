import styled from "styled-components";

export const ContainerSignUpPage = styled.div`
display: flex;
justify-content: center;
background-color: #333333;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

`
export const ContainerLogo = styled.div`
 flex: 63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  height: 100vh;


h1 {
    font-family: 'Passion One', sans-serif;
    font-size: 106px;
    font-weight: 700;
    color: #FFFFFF;
    width: 233px;
    height: 117px;
}
p {
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    font-weight: 700;
    color: #FFFFFF;
    width: 442px;
    height: 128px;
    margin-top: 10px;

}
@media (max-width: 767px) {
    width: 100%;
    height: 175px;
    flex: 25;

    p {
        width: 237px;
        height: 68px;
        font-family: Oswald;
        font-size: 23px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
    }

    h1 {
        width: 167px;
        height: 84px;
        font-family: Passion One;
        font-size: 76px;
        font-weight: 700;
        line-height: 84px;
        letter-spacing: 0.05em;
        text-align: left;
    }
  }
`
export const ContainerSignUp = styled.div`
  flex: 37;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input {
    background-color: #FFFFFF;
    width: calc(100% - 167px);
    height: 65px;
    margin: 10px 30px 10px 30px;
    border-radius: 6px;
    border: none;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 27px;
    color: #9F9F9F;
}
button {
    background-color: #1877F2;
    width: calc(100% - 167px);
    height: 65px;
    border-radius: 6px;
    border: none;
    color: #FFFFFF;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    font-weight: 700;
    margin-top: 10px;
}
div {
    margin-top: 15px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 400px;
    text-decoration: underline;
    color: #FFFFFF;
}
@media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    flex: 75;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 63px;

    button {
        width: calc(100% - 12.7%);
        font-family: 'Oswald', sans-serif;
    }

    input {
        width: calc(100% - 18%);
        font-family: 'Oswald', sans-serif;
    }

    div{
        font-family: Lato;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
    }

}
`

