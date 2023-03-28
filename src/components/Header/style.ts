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
        background-color: #0261B5;
        border: 1.5px solid #0261B5;
        color: #ffffff;
        border-radius: 7px;
        font-size: 14px;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        nav {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media (min-width: 1460px) {
        nav {
            width: 75%;
            margin: 0 auto;
        }
    }
`;