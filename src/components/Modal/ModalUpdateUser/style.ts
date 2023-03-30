import styled, { keyframes } from "styled-components";
import { closeModal, openModal } from "../../../styles/global";


export const ModalUpdateUserStyle = styled.div`
    
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: auto;
    background-color: #ffffff;
    border: solid 1.5px #027fe9;
    max-width: 600px;
    opacity: 0;
    animation: ${openModal} 0.8s forwards;
    max-width: 406px;

    .modal-update {
        width: 100%;
        height: 100%;
    }

    .header-modal-update {
        height: 95px;
        width: 100%;
        background-color: #027fe9;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .header-modal-update div {
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: 267px;
    }

    .header-modal-update div img {
        width: 65px;
        height: 65px;
    }

    .header-modal-update div button {
        width: 150px;
        height: 40px;
        background-color: #027fe9;
        border: #ffffff solid 1.5px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
    }

    .form-modal-update {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }

    .form-modal-update h2 {
        color: #027fe9;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .form-modal-update div {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0 auto 8px auto;
    }

    .form-modal-update div label {
        font-size: 14px;
        color: #027FE9;
    }

    .form-modal-update div input {
        height: 30px;
        border-radius: 8px;
        border: solid 1px #F1F1F1;
        background-color: #F1F1F1;
        margin: 5px 0 2.5px 0;
        padding-left: 5px;
    }

    .form-modal-update div .erro-update {
        font-size: 12px;
        color: red;
    }

    .form-modal-update .form-button {
        display: flex;
        gap: 6px;
    }

    .form-modal-update .form-button .form-button-update {
        height: 35px;
        background-color: #027FE9;
        border: #027FE9 solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
    }

    .form-modal-update .form-button .form-button-update:hover {
        background-color: #0261B5;
        border: #0261B5 solid 1.5px;
        transition: 0.6s;
    }

    .form-modal-update .form-button .form-button-delete {
        height: 35px;
        background-color: red;
        border: red solid 1.5px;
        border-radius: 6px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        transition: 0.6s;
    }

    .form-modal-update .form-button .form-button-delete:hover {
        background-color: #a51b0b;
        border: #a51b0b solid 1.5px;
        transition: 0.6s;
    }

    .close-modal-update {
        position: absolute;
        top: 1.5%;
        right: 5%;
        color: #ffffff;
        cursor: pointer;
    }

    .close-modal-update:hover {
        font-size: 18px;
        border-bottom: 1px solid #F3F3F3;
        color: #F3F3F3;
    }

    .form-button-update-loading {
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

    .form-button-delete-loading {
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
        max-width: 800px;
        /* max-height: 430px; */
        max-width: auto;
        top: 33%;

        .modal-update {
            display: flex;
        }
        
        .header-modal-update {
            /* height: 430px; */
            height: auto;
            width: 40%;
            background-color: #027fe9;
            border-bottom-left-radius: 0;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        .header-modal-update div {
            flex-direction: column;
            justify-content: center;
            gap: 30px;
        }

        .header-modal-update div img {
            width: 150px;
            height: 150px;
        }

        .form-modal-update {
            width: 60%;
        }

        .form-modal-update .form-button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
        }

        .form-modal-update .form-button .form-button-update {
            height: 40px;
            width: 130px;
            background-color: #027FE9;
            border: #027FE9 solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
        }

        .form-modal-update .form-button .form-button-delete {
            height: 40px;
            width: 130px;
            background-color: red;
            border: red solid 1.5px;
            border-radius: 6px;
            color: #ffffff;
            font-weight: bold;
            font-size: 15px;
            transition: 0.6s;
        }

        .close-modal-update {
            position: absolute;
            top: 3%;
            right: 3%;
            color: #027FE9;
            cursor: pointer;
        }

        .close-modal-update:hover {
            font-size: 18px;
            border-bottom: 1px solid #0261B5;
            color: #0261B5;
        }

        .form-button-update-loading {
            height: 40px;
            width: 130px;
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

        .form-button-delete-loading {
            height: 40px;
            width: 130px;
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

    }

    
`;