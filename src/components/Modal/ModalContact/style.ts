import styled, { keyframes } from "styled-components";
import { closeModal, openModal } from "../../../styles/global";


export const ModalUpdateContactStyle = styled.div`
    
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

    .header-modal-contact {
        width: 100%;
        height: 40px;
        background-color: #027FE9;
    }

    .header-modal-contact div {
        width: 95%;
        height: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        font-weight: bold;
    }

    .header-modal-contact div span:hover {
        cursor: pointer;
    }

    .header-modal-contact div span:hover {
        font-size: 18px;
        border-bottom: 1px solid #F3F3F3;
        color: #F3F3F3;
    }
    
    .from-modal-contact {
        width: 90%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .from-modal-contact div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .from-modal-contact div label {
        font-size: 14px;
        color: #027FE9;
    }

    .from-modal-contact div input {
        height: 30px;
        border-radius: 8px;
        border: solid 1px #F1F1F1;
        background-color: #F1F1F1;
        margin: 5px 0 2.5px 0;
        padding-left: 5px;
    }

    .from-modal-contact div .erro-contact {
        font-size: 12px;
        color: red;
    }

    .from-modal-contact .form-contact-button{
        display: flex;
        gap: 6px;
        margin-top: 10px;
    }

    .from-modal-contact .form-contact-button .button-contact-update {
        height: 35px;
        background-color: #027FE9;
        border: #027FE9 solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
    }

    .from-modal-contact .form-contact-button .button-contact-update:hover {
        background-color: #0261B5;
        border: #0261B5 solid 1.5px;
        transition: 0.6s;
    }

    .from-modal-contact .form-contact-button .button-contact-delete {
        height: 35px;
        background-color: red;
        border: red solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
    }

    .from-modal-contact .form-contact-button .button-contact-delete:hover {
        background-color: #a51b0b;
        border: #a51b0b solid 1.5px;
        transition: 0.6s;
    }

    .button-contact-update-loading {
        height: 35px;
        background-color: #0261B5;
        border: #0261B5 solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-contact-delete-loading {
        height: 35px;
        background-color: red;
        border: red solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {

        top: 35%;

        .from-modal-contact .form-contact-button{
            flex-direction: row;
            gap: 6px;
            margin-top: 10px;
            justify-content: center;
        }

        .from-modal-contact .form-contact-button .button-contact-update {
            height: 40px;
            width: 170px;
            background-color: #027FE9;
            border: #027FE9 solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
        }

        .from-modal-contact .form-contact-button .button-contact-delete {
            height: 40px;
            width: 170px;
            background-color: red;
            border: red solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
        }

        .button-contact-update-loading {
            height: 40px;
            width: 170px;
            background-color: #0261B5;
            border: #0261B5 solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .button-contact-delete-loading {
            height: 40px;
            width: 170px;
            background-color: red;
            border: red solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
        }
        
    }

    
`;