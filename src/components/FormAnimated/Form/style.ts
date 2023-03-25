import styled from "styled-components";

export const FormStyle = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F1F1F1;

    .content {
        background-color: #ffffff;
        border-radius: 15px;
        width: 55%;
        height: 60%;
        display: flex;
        position: relative;
    }

    .content::before {
        content: "";
        position: absolute;
        background-color: #027FE9;
        width: 45%;
        height: 100%;
        animation: slide-out 1.2s;
        z-index: 2;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    .content-second {
        background-color: #ffffff;
        border-radius: 15px;
        width: 55%;
        height: 60%;
        display: flex;
        position: relative;
    }

    .content-second::before {
        content: "";
        position: absolute;
        background-color: #027FE9;
        width: 45%;
        height: 100%;
        left: 55%;
        z-index: 2;
        animation: slide-in 1.2s;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .register-form-front {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .register-form-back {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        display: none;
    }    

    .login-form-back {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        display: none;
        position: absolute;
    }

    .login-form-front {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    @keyframes slide-in {

        from {
            left: 0;
            width: 60%;
        }

        to {
            left: 55%;
            width: 45%;
        }
        
    }

    @keyframes slide-out {

        from {
            left: 55%;
            width: 45%;
        }

        to {
            left: 0;
            width: 45%;
        }

    }

    @media screen and (max-width: 1024px) {

        background-color: #ffffff;

        .content {
            width: 100%;
            height: 100%;
        }

        .content::before {
            width: 100%;
            height: 30%;
            top: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px; 
        }

        .register-form-front {
            flex-direction: column;
        }


        .content-second {
            width: 100%;
            height: 100%;
        }

        .content-second::before {
            width: 100%;
            height: 40%;
            top: 70%;
            left: 0;
            border-bottom-right-radius: 0;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;

        }

        .login-form-front {
            flex-direction: column;
        }

        @keyframes slide-in {

            from {
                top: 0;
                height: 60%;
            }

            to {
                top: 70%;
                height: 40%;
            }

        }

        @keyframes slide-out {

            from {
                top: 55%;
                height: 45%;
            }

            to {
                top: 0;
                height: 30%;
            }

        }
    }

`;