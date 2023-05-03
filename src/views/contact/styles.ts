import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 1s;
  margin: 100px 30px 80px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin-right: 30px;
  }
`;
