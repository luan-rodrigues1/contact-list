import styled, { keyframes } from 'styled-components';

const wiggle = keyframes`
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 9999;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #027fe9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: ${wiggle} 1s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    width: 80%;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
`;

export {LoadingWrapper, Title}


