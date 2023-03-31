import styled, { keyframes } from "styled-components";
import { openModal } from "../../../styles/global";


export const ModalAddStyle = styled.div`
    
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: auto;
    background-color: #ffffff;
    border: solid 1.5px #027fe9;
    max-width: 500px;
    opacity: 0;
    animation: ${openModal} 0.8s forwards;



    .header-modal-add {
        width: 100%;
        height: 40px;
        background-color: #027FE9;
    }

    .header-modal-add div {
        width: 95%;
        height: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        font-weight: bold;
    }

    .header-modal-add div span:hover {
        cursor: pointer;
    }

    .header-modal-add div span:hover {
        font-size: 18px;
        border-bottom: 1px solid #F3F3F3;
        color: #F3F3F3;
    }
    
    .from-modal-add {
        width: 90%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .from-modal-add div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .from-modal-add div label {
        font-size: 14px;
        color: #027FE9;
    }

    .from-modal-add div input {
        height: 30px;
        border-radius: 8px;
        border: solid 1px #F1F1F1;
        background-color: #F1F1F1;
        margin: 5px 0 2.5px 0;
        padding-left: 5px;
    }

    .from-modal-add div .erro-add {
        font-size: 12px;
        color: red;
    }

    .from-modal-add .button-add {
        height: 35px;
        width: 150px;
        margin-top: 10px;
        background-color: #027FE9;
        border: solid 1px #027FE9;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
    }

    .from-modal-add .button-add {
        height: 40px;
        width: 100%;
        margin-top: 5px;
        background-color: #027FE9;
        border: solid 1px #027FE9;
        border-radius: 6px;
        color: #ffffff;
        font-size: 15px;
        font-weight: bold;
        transition: 0.6s;
    }

    .from-modal-add .button-add:hover {
        background-color: #0261B5;
        border: solid 1px #0261B5;
        transition: 0.6s;
    }

    .button-add-loading {
        height: 40px;
        width: 100%;
        margin-top: 5px;
        background-color: #0261B5;
        border: solid 1px #0261B5;
        border-radius: 6px;
        color: #ffffff;
        font-size: 15px;
        font-weight: bold;
        transition: 0.6s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {

        top: 35%;

        .from-modal-add .button-add {
            height: 40px;
            width: 170px;
            font-size: 15px;
        }

        .button-add-loading {
            height: 40px;
            width: 170px;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    
`;