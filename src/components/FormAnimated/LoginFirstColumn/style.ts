import styled from "styled-components";

export const LoginFirstColumnStyle = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-first {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .login-first h2 {
        font-size: 34px;
        font-weight: bold;
        color: #027FE9;
    }

    .login-first .instruction {
        width: 250px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
        color: #808080;
    }

    .login-first form {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-first form div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .login-first form div label {
        color: #A9A9A9;
    }

    .login-first form div .input-password-login {
        margin-bottom: 0px;
        position: relative;
    }

    .login-first form div .input-password-login img{
        width: 18px;
        height: 18px;
        position: absolute;
        top: 39%;
        right: 0%;
        margin-right: 10px;
        cursor: pointer;
    }

    .login-first form div input {
        height: 35px;
        border-radius: 10px;
        border: solid 1.5px;
        border-color: #F1F1F1;
        margin-top: 7px;
        padding-left: 7px;
        background-color: #F1F1F1;
        color: #808080;
    }

    .login-first form div p {
        font-size: 12px;
        color: red;
        margin-top: 5px;
    }

    .login-first form .button-form-login {
        margin-top: 20px;
        width: 130px;
        height: 40px;
        background-color: #027FE9;
        border: 2px solid #ffffff;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
        border-radius: 30px;
        transition: 0.6s;
    }

    .login-first form .button-form-login:hover {
        background-color: #0261B5;
        transition: 0.6s;
    }

    .button-loading {
        margin-top: 20px;
        width: 130px;
        height: 40px;
        background-color: #0261B5;
        border: 2px solid #ffffff;
        font-weight: bold;
        font-size: 16px;
        border-radius: 30px;
        transition: 0.6s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;


        .login-first {
            width: 100%;
            gap: 20px;
        }

        .login-first form {
            width: 85%;
            gap: 15px;
            max-width: 570px;
        }

    }
    
`;