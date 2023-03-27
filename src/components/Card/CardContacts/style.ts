import styled from "styled-components";

export const CardContactsStyle = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    li {
        width: 100%;
        height: 140px;
        background-color: #49A0EC;
        border-radius: 20px;
        margin-bottom: 15px;
        max-width: 288px;
        position: relative;
    }

    li .container-card {
        width: 92%;
        margin: 0 auto;
    }

    li .container-card div {
        display: flex;
        margin-top: 10px;
    }

    li .container-card div .card-contact-photo {
        width: 35px;
        height: 35px;
        margin-right: 5px;
        margin-top: 14px;
    }

    li .container-card div div {
        display: flex;
        flex-direction: column;
    }

    li .container-card div div h2 {
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
    }

    li .container-card div div span {
        font-size: 13px;
        color: #ffffff;
    }

    li .container-card section div{
    }

    li .container-card section div span{
        font-size: 13px;
        color: #ffffff;
    }

    .card-contact-icon {
        margin-right: 7px;
    }

    .edit-button {
        position: absolute;
        top: 10%;
        right: 6%;
    }

    .no-contacts {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        li {
            margin-bottom: 0px;
            margin: 15px;
        }
    }

`;