import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

const eyeball = keyframes`
  0% {
    transform: translate(-50%, 50%);
  }
  25% {
    transform: translate(50%,0%) translate(-50%);
  }
  50% {
    transform: translate(50%, -50%);
  }
  75% {
    transform: translate(-50%, 0%) translateX(50%);
  }
  100% {
    transform: translate(-50%, 50%);
  }
`;

const blink = keyframes`
  0% {
    height: 100%;
  }
  20% {
    height: 20%;
  }
  40% {
    height: 20%;
  } 60% {
    height: 20%;
  }
  80% {
    height:20%;
  }
    100% {
    height: 100%;
  }


`;

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
  color: white;
  margin: 80px 0;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 1s;
  @media (max-width: 1080px) {
  }
  @media (min-height: 880px) {
    gap: 80px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 40px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
`;

export const TitleWork = styled.div`
  font-size: 30px;
  padding: 12px;
`;

export const Eye = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 30px;
  width: 50px;
  height: 50px;
  background: #fff;
  transform: rotate(45deg);
  border-radius: 75% 0;
  overflow: hidden;
  margin-left: 30px;
  border: none;
`;

export const Shut = styled.div`
  width: 100px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  z-index: 999;
`;
export const Blink = styled.span`
  display: block;
  width: 100%;
  height: 10%;
  background-color: #ecbcb4;
  border-radius: 0 0 60% 60%;
  animation: ${blink} 2.2s infinite;
`;
export const Ball = styled.div`
  width: 35px;
  height: 35px;
  background: #222f3e;
  border-radius: 50%;
  border: 10px solid #576574;
  transform: translate(-50%, -50%);
  animation: ${eyeball} 4.3s infinite;
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* width: 80%; */
  margin-top: 20px;
`;

export const ArrowButton = styled.button`
  font-size: 2rem;
  padding: 0 30px;
  animation: ${changeColor} 3s ease-in-out infinite;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    animation: none;
    cursor: default;
    color: rgb(40, 47, 43);
  }
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
