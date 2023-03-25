import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../../styles/global";

export const LoginSecondColumnStyle = styled.div`
    width: 45%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    color: rgb(255, 255, 255);
    animation: ${fadeIn} 2.2s ease-in-out forwards;
    
    .login-second {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
    }

    .login-second h1 {
        font-size: 34px;
        font-weight: bold;
    }

    .login-second h2 {
        max-width: 250px;
    }

    .login-second button {
        width: 130px;
        height: 40px;
        margin-top: 15px;
        background-color: #027FE9;
        border: 2px solid #ffffff;
        border-radius: 30px;
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
        transition: 0.6s;
    }

    .login-second button:hover {
        background-color: #0261B5;
        border: 2px solid #027FE9;
        color: #ffffff;
        transition: 0.6s;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 30%;
        margin: 0;
    }

`;