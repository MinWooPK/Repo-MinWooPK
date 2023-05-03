import styled, { keyframes } from "styled-components";

const brillo = keyframes`
  0% {
    border-color: silver;
    box-shadow: 0 0 10px silver;
  }
  50% {
    border-color: white;
    box-shadow: 0 0 20px white;
  }
  100% {
    border-color: silver;
    box-shadow: 0 0 10px silver;
  }
  `;

const DetailsAnimation = keyframes`
  0% {
    color: #FDE68A; 
  }
  50% {
    color: #FDBA74; 
  }
  100% {
    color: #FFDAB9}
`;

export const Details = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 500;
  text-decoration: underline;
  font-style: italic;
  text-underline-offset: 4px;
  transform: translate(-50%, -50%);
  animation: ${DetailsAnimation} 2s ease-in-out infinite;
  font-size: 20px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
`;
export const ImgWork = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
`;

export const CardsContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  animation-name: ${brillo};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  cursor: pointer;
  &:hover ${ImgWork} {
    filter: blur(3px);
  }
  &:hover ${Details} {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.3s;
  }

  @media (max-width: 340px) {
    width: 250px;
  }

  /* width: 100px; */
`;

export const ImgContainer = styled.div`
  position: relative;

  height: 100%;
`;

export const FooterCard = styled.div`
  padding: 10px 20px;
  background-color: rgba(50, 50, 50, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
export const TitleCard = styled.h1`
  font-size: 12px;
  color: #fff;
`;
export const SubTitleCard = styled.span`
  animation: ${DetailsAnimation} 2s ease-in-out infinite;
`;
