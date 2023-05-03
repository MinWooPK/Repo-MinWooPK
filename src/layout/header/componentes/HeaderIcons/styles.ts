import styled, { keyframes } from "styled-components";

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

export const IconContainer = styled.div`
  cursor: pointer;
  width: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const IconText = styled.span`
  animation: ${changeColor} 3s ease-in-out infinite;
`;
