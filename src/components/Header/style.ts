import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 70px;
    width: 100vw;
    background-color: #027FE9;

    nav {
        height: 100%;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav h1 {
        font-size: 21px;
        font-weight: bold;
        color: #ffffff;
    }

    nav button {
        height: 28px;
        width: 55px;
        background-color: #027FE9;
        border: 1.5px solid #ffffff;
        color: #ffffff;
        border-radius: 7px;
        font-size: 14px;
        font-weight: bold;
        transition: 0.6s;
    }

    nav button:hover {
        background-color: #0261B5;
        border: 1.5px solid #0261B5;
        transition: 0.6s;
    }

    @media (min-width: 768px) {
        height: 80px;
        nav {
            width: 80%;
            margin: 0 auto;
        }

        nav button {
            height: 35px;
            width: 75px;
            font-size: 16px;
        }
    }

    @media (min-width: 1460px) {
        nav {
            width: 75%;
            margin: 0 auto;
        }
    }
`;