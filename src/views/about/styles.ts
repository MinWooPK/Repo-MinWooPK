import styled, { keyframes } from "styled-components";

const fadeInOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  }`;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1;
  padding: 0 12vw;
  gap: 40px;
  animation: ${fadeInOpacity} 2s forwards;
  animation-delay: 1s;
  opacity: 0;
  color: white;
  margin-top: 5%;
`;
export const DesciptionDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleSection = styled.h1`
  font-size: 60px;
  margin-bottom: 0;
`;
export const SubtituleSection = styled.h2`
  font-size: 16px;
  color: #444;
`;

export const IntroductionSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 6%;
  padding: 0;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const ImgSection = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const IntroductionImg = styled.img`
  height: 550px;
  border: 1px rgb(40, 47, 43) solid;
  border-radius: 16px;
  width: 100%;
  object-fit: cover;
  @media (min-width: 1880px) {
    width: 90%;
    height: 600px;
  }
`;
export const Navigation = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  z-index: 1;
`;

export const Button = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: ${({ active }) => (active ? "#ffffff" : "#cccccc")};
  cursor: pointer;
`;

export const IntroductionDetail = styled.div`
  width: 40%;
  font-family: sans-serif;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
  }

  @media (min-width: 1880px) {
    font-size: 24px;
  }
`;

export const IntroductionDetailP = styled.p`
  font-size: 18px;

  @media (min-width: 1880px) {
    font-size: 26px;
  }
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
    ${buttonAnimation} 3s ease-in-out infinite;
`;

export const ContainerStudy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 50px;
  gap: 20px;
  align-items: center;
  margin-bottom: 100px;
`;

export const LeftBox = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(-10%)" : "translateX(-100%)"};
  transition: opacity 1s ease-out, transform 3s ease-out;
  background-color: #e8e6e3;
  padding: 20px 20px 30px 40px;
  border: 1px solid #282c34;
  border-radius: 12px;
  width: 100%;
  @media (max-width: 800px) {
    transform: ${({ isVisible }) =>
      isVisible ? "translateX( 0%)" : "translateX(-100%)"};
  }
  @media (min-width: 801px) {
    transform: ${({ isVisible }) =>
      isVisible ? "translateX(-5%)" : "translateX(-100%)"};
  }
`;

export const RightBox = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background-color: #e8e6e3;
  padding: 20px 20px 30px 40px;
  border: 1px solid #282c34;
  border-radius: 12px;
  width: 100%;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(10%)"};
  transition: opacity 1s ease-out, transform 2s ease-out;
`;

export const BoxTitleGamma = styled.h1`
  color: #fabb2e;
  font-size: 30px;
`;

export const BoxTitleUsal = styled.h1`
  font-size: 30px;
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  color: #e52e2a;
`;

export const BoxDetail = styled.div`
  margin-top: 30px;
  font-size: 18px;
  width: 40%;
  color: #a5a4a4;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ContentBoxDetail = styled.div`
  display: flex;
  gap: 5vw;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgDetail = styled.img`
  border: 1px rgb(40, 47, 43) solid;
  border-radius: 16px;
  height: 100%;
  width: 60%;
  object-fit: contain;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Section = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
  transition: background-color 0.5s ease;
`;

export const StyledSection = styled(Section)``;
