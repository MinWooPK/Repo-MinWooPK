import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 40px;
  height: 30px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterSection = styled.footer`
  display: flex;
  animation: ${fadeIn} 2s forwards;
  align-items: center;
  background-color: rgba(40, 44, 52, 0.7);
  height: 50px;
  justify-content: center;
  gap: 20px;
  padding: 0 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
