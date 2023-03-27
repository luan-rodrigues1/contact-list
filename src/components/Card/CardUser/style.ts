import styled from "styled-components";

export const CardUserStyle = styled.aside`
    width: 100vw;

    .card-user {
        height: 75px;
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        border: solid 2px #027FE9;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 10px;
        position: relative;
    }

    .card-user .card-user-photo {
        width: 55px;
        height: 55px;
        margin-left: 10px;
        margin-right: 8px;
    }

    .card-user div h3, .card-user div p {
        font-size: 15px;
    }

    .card-user .card-user-edit {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 8%;
        right: 5%;
    }

    .card-user-info {
        display: none;
    }
`;