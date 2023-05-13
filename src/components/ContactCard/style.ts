import styled from "styled-components";

export const ContactCardStyle = styled.ul`
    width: 90%;
    margin: 20px auto 0 auto;

    li {
        max-width: 383px;
        background-color: #027FE9;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    li header .box-contact {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    li header .box-contact .box-info-contact {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    li header .box-contact .box-info-contact .noImage {
        width: 55px;
        height: 55px;
    }

    li header .box-contact .box-info-contact .contactImage {
        width: 55px;
        height: 55px;
        border: #ffffff solid 2px;
        border-radius: 50%;
    }

    li header .box-contact .box-info-contact .box-description-contact {
        color: #ffffff;
    }

    li header .box-contact .box-info-contact .box-description-contact h3 {
        font-weight: bold;
        font-size: 20px;
    }

    li header .box-contact .box-info-contact .box-description-contact p {
        font-size: 14px;
        margin-top: 4px;
    }

    li header .box-contact button {
        background-color: transparent;
        border: none;
    }

    section {
        margin-left: 8px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    section div {
        display: flex;
        gap: 12px;
    }

    section div span {
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    .no-contacts {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .no-contacts {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .no-contacts h2 {
        font-size: 18px;
        color: #027FE9;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 55px;

        li {
            min-width: 288px;
            padding: 15px;
            
        }

        .no-contacts h2 {
            font-size: 28px;
        }   

    }

    @media (min-width: 1444px) {
        width: 75%;
    }
`
