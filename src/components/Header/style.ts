import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 70px;
    width: 100vw;
    background-color: #027FE9;

    nav {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    nav h1 {
        font-size: 21px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
    }

    nav .box-info-user {
        display: flex;
    }

    nav .box-info-user .noImage {
        width: 40px;
        height: 40px;
    }

    nav .box-info-user .contactImage {
        width: 40px;
        height: 40px;
        border: #ffffff solid 2px;
        border-radius: 50%;
    }

    nav .box-info-user div {
        display: none;
    }

    .modal-bar {
        position: absolute;
        width: 100%;
        top: 70px;
        background-color: #027FE9;
    }

    .modal-bar ul {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 8px;
        margin-bottom: 10px;
        gap: 14px;
        color: #ffffff;
    }

    .modal-bar ul li {
        display: flex;
        gap: 3px;
    }

    .modal-bar ul li img {
        width: 22px;
        height: 22px;
    }

    .modal-bar-big {
        display: none;
    }

    @media (min-width: 768px) {
        height: 100px;

        nav h1 {
            font-size: 28px;
            font-weight: bold;
            color: #ffffff;
        }
    
        nav .box-info-user {
            cursor: pointer;
            display: flex;
            align-items: center;
            color: #ffffff;
        } 

        nav .box-info-user div {
            display: flex;
            align-items: center;
            margin-left: 10px;
        }

        nav .box-info-user div img {
            margin-bottom: 6px;
        }

        .modal-bar {
            display: none;
        }

        .modal-bar-big {
            display: block;
            position: absolute;
            right: 2px;
            top: 82px;
            width: 165px;
            border-radius: 10px;
            background-color: #027FE9;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            color: #ffffff;
        }


        .modal-bar-big ul {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-around;
        }

        .modal-bar-big ul li {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            height: 45px;
            padding-right: 10px;
        }

        .modal-bar-big ul li:hover > p {
            border-bottom: 1px solid;
            transition: 0.4s;
        } 

        .modal-bar-big ul li img {
            width: 22px;
            height: 22px;
        }

        .modal-bar-big ul li p {
            border-bottom: 1px solid transparent;
            transition: 0.4s;
        }

        .modal-bar-big ul li:hover ~ li > p {
            border-bottom: 1px solid transparent;
        }
    }

    @media (min-width: 1444px) {
        nav {
            width: 75%;
        }
    }
`;