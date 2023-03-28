import styled from "styled-components";

export const CardContactsStyle = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    li {
        width: 100%;
        height: 180px;
        background-color: #49A0EC;
        border-radius: 20px;
        margin-bottom: 15px;
        min-width: 288px;
        position: relative;
    }

    li .container-card {
        width: 92%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    li .container-card div {
        display: flex;
        margin-top: 10px;
        align-items: center;
    }

    li .container-card div .card-contact-photo {
        width: 40px;
        height: 40px;
        margin-right: 5px;
        margin-top: 14px;
    }

    .photo-exist-contact {
        width: 40px;
        height: 40px;
        margin-right: 5px;
        margin-top: 14px;
        border-radius: 50%;
    }

    li .container-card div div {
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    li .container-card div div h2 {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
    }

    li .container-card div div span {
        font-size: 14px;
        color: #ffffff;
    }

    li .container-card section div span{
        font-size: 16px;
        color: #ffffff;
    }

    li .container-card section div img{
        width: 25px;
        height: 25px;
    }

    li .container-card section {
        margin-top: 25px;
    }

    .card-contact-icon {
        margin-right: 7px;
    }

    .edit-button {
        position: absolute;
        top: 10%;
        right: 6%;
        border-bottom: solid 1.5px transparent;
        transition: 0.6s;
        cursor: pointer;
    }

    .edit-button:hover {
        width: 25px;
        height: 25px;
        transition: 0.6s;
    }

    .no-contacts {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    @media (min-width: 768px) {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;

        li {
            margin: 0;
            max-width: 1000px;
            width: calc(50% - 8px);
        }

        li .container-card {
            width: 92%;
            margin: 0 auto;
        }
    }

`;