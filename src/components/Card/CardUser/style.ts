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

    .photo-exist-user {
        width: 55px;
        height: 55px;
        margin-left: 10px;
        margin-right: 8px;
        border-radius: 50%;
    }

    .card-user .card-user-name h3, .card-user .card-user-name p {
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

    @media (min-width: 768px) {
        max-width: 500px;
        .card-user {
            width: 100%;
            height: 365px;
            max-width: 390px;
            margin: 45px 0px;
            flex-direction: column;
            gap: 10px;
            border-radius: 20px;
        }

        .card-user .card-user-photo {
            margin-top: 30px;
            width: 120px;
            height: 120px;
        }

        .card-user-name{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px;
            gap: 5px;
        }

        .card-user .card-user-name h3{
            font-size: 16px;
        }

        .card-user .card-user-name p{
            font-size: 22px;
        }

        .card-user-info {
            display: flex;
            gap: 14px;
            justify-content: center;
            align-items: center;
            color: #027FE9;
        }


        .card-user-info div {
            display: flex;
            gap: 10px;
        }

        .card-user-info div img{
            color: #027FE9;
            width: 20px;
            height: 20px;
        }

        .card-user-info {
            display: flex;
            flex-direction: column;
        }

    }

`;