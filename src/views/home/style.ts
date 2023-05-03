import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const shineAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  40% {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
`;

const buttonAnimation = keyframes`
  0% {
    color:  rgba(255, 255, 255, 0.6);
  }
  40% {
   color:  rgba(255, 255, 255, 1);
  }
  100% {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const changeColor = keyframes`
  0% {
    color: #FDE68A; 
  }
  50% {
    color: #FDBA74; 
  }
  100% {
    color: #FFDAB9}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  opacity: 0;
  margin: 0;
  padding: 0 15vw;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 1s;
  color: white;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DesciptionDetail = styled.div`
  margin-top: 17%;
  width: 50%;
`;

export const HomeImgeContainer = styled.div``;
export const HomeImge = styled.img`
  width: 100%;
`;

export const HomeHandIcon = styled.img`
  animation: ${waveAnimation} 0.5s infinite;
  width: 60px;
`;

export const DescriptionH1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 1080px) {
    font-size: 30px;
  }
`;

export const DescriptionH2 = styled.h2`
  font-size: 17px;
  font-weight: 400;
  color: grey;
  animation: ${changeColor} 5s ease-in-out infinite;
`;
export const ButtonContact = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid #ffd700;
  border-radius: 1px;
  margin-top: 2rem;
  padding: 1rem 2rem;
  letter-spacing: 5px;
  color: ${buttonAnimation};
  animation: ${shineAnimation} 2s ease-in-out infinite,
    ${buttonAnimation} 2s ease-in-out infinite;
`;
