import styled from "styled-components";

export const CardMainStyle = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 85%;
        gap: 15px;
        margin: 0 auto;
    }

    @media (min-width: 1460px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0px;
        width: 75%;
        margin: 0 auto;
    }
    
`;