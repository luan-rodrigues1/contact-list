import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../../styles/global";

export const RegisterFirstColumnStyle = styled.div`
  flex: 45%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  color: rgb(255, 255, 255);
  opacity: 0;
  animation: ${fadeIn} 2.45s ease-in-out forwards;

  .register-first {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .register-first h1 {
    font-size: 34px;
    font-weight: bold;
  }

  .register-first div {
    text-align: center;
    line-height: 20px;
    width: 95%;
  }

  .register-first button {
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

  .register-first button:hover {
    background-color: #0261B5;
    border: 2px solid #027FE9;
    color: #ffffff;
    transition: 0.6s;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 0px;

    .register-first div {
      width: auto;
    }
  }

`;