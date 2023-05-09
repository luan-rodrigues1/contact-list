import styled from "styled-components";

export const ContactHeaderStyle = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 35px;
    margin-bottom: 45px;

    h2 {
        color: #027FE9;
    }

    form {
        max-width: 288px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    form input {
        width: 85%;
        height: 22px;
        max-width: 240px;
        border-radius: 15px;
        border: #49A0EC solid 1.8px;
        background-color: #ffffff;
        padding-left: 10px;
        
    }

    form .search-button {
        height: 25px;
        background-color: #027FE9;
        border: #027FE9;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form .search-button img {
        width: 20px;
        height: 20px;
    }

    .button-add {
        display: none;
    }

    .floating-button-add {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: none;
        background-color: #49A0EC;
        color: #ffffff;
        position: fixed;
        top: 93%;
        right: 4%;
        font-size: 36px;
        box-shadow: 0 2px 5px #808080;
        cursor: pointer;
    }

    @media (min-width: 768px) {

        flex-direction: row;
        justify-content: space-between;

        h2 {
            font-size: 22px;
        }

        form {
            max-width: auto;
            width: auto;
            display: flex;
            gap: 10px;
            margin-right: 10px;
        }

        form input {
            width: 220px;
            height: 25px;
            border-radius: 15px;
            border: #49A0EC solid 1.8px;
            background-color: #ffffff;
        }

        .button-add {
            display: flex;
            width: 30px;
            height: 25px;
            font-size: 22px;
            justify-content: center;
            align-items: center;
            background-color: #027FE9;
            border: none;
            color: #ffffff;
            border-radius: 4px;
            margin-left: 15px;
        }

        .floating-button-add {
            display: none;
        }
    }

    @media (min-width: 1444px) {
        width: 75%;

        form {
            max-width: 400px;
        }
    }
`