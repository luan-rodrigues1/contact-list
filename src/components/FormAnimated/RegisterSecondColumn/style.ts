import styled from "styled-components";

export const RegisterSecondColumnStyle = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .register-second{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .register-second h2 {
        font-size: 34px;
        font-weight: bold;
        color: #027FE9;
    }

    .register-second span {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #808080;
    }

    .register-second form {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .register-second  form div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .register-second  form div label {
        color: #A9A9A9;
    }

    .register-second form div .input-password {
        margin-bottom: 0px;
        position: relative;
    }

    .register-second form div .input-password img{
        width: 18px;
        height: 18px;
        position: absolute;
        top: 33%;
        right: 0%;
        margin-right: 10px;
        cursor: pointer;
    }

    .register-second form div input {
        height: 30px;
        border-radius: 10px;
        border: solid 1.5px;
        border-color: #F1F1F1;
        margin-top: 5px;
        margin-bottom: 3px;
        padding-left: 7px;
        background-color: #F1F1F1;
        color: #808080;
    }

    .register-second form div p {
        font-size: 11px;
        color: red;
    }

    .register-second form .button-form-register {
        margin-top: 5px;
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

    .register-second form .button-form-register:hover {
        background-color: #0261B5;
        transition: 0.6s;
    }

    .button-loading {
        margin-top: 5px;
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
        .register-second h2 {
            width: 240px;
        }

        .register-second span {
            width: 240px;
        }  

        .register-second form {
            width: 85%;
            max-width: 570px;
        }

        .button-loading {
            margin-top: 5px;
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

        .button-loading span {
            width: 10px;
            height: 10px;
        }
    }

`;