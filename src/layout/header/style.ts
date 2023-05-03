import styled, { keyframes } from "styled-components";

const changeColor = keyframes`
  0% {
    background-color: #FDE68A; 
  }
  50% {
    background-color: #FDBA74; 
  }
  100% {
    background-color: #FFDAB9}
`;

export const HeaderSection = styled.header`
  align-items: center;
  gap: 40px;
  background-color: #282c34;
  border-bottom: 1px solid #282f2b;
  display: flex;
  height: 60px;
  justify-content: center;
  padding: 0 24px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  font-size: 14px;

  button {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
export const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const HamburgerSpan = styled.span`
  height: 3px;
  width: 25px;
  background-color: ${changeColor};
  animation: ${changeColor} 2s ease-in-out infinite;
  border-radius: 12px;
`;
