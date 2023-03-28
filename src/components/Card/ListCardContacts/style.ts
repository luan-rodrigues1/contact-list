import styled from "styled-components";

export const ListCardContactsStyle = styled.section`
    width: 100vw;

    .header-list {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .header-list h2 {
        font-size: 24px;
        color: #027FE9;
    }

    .header-list button {
        height: 30px;
        width: 30px;
        border-radius: 4px;
        border: solid 1.5px #027FE9;
        background-color: #027FE9;
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        transition: 0.6s;
    }

    .header-list button:hover {
        background-color: #0261B5;
        border: 1.5px solid #0261B5;
        transition: 0.6s;
    }

    

    @media (min-width: 768px) {
        .header-list {
            width: 100%;
            margin: 45px 0 25px 0;
        }
    }

    
`;