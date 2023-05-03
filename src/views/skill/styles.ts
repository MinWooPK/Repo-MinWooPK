import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SubtitleAnimation = keyframes`
    0% { color: rgb(68, 68, 68); }
    50% { color: rgb(187, 187, 187); }
    100% { color: rgb(68, 68, 68); }
`;

export const SkillContainer = styled.div`
  margin-top: 80px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 1s;
  @media (max-width: 1080px) {
  }
`;

export const Subtitle = styled.div`
  font-size: 16px;
  color: rgb(68, 68, 68);
  padding-left: 30px;
  animation: ${SubtitleAnimation} 4s infinite;
`;

export const SkillBox = styled.div`
  margin-top: 60px;
  padding: 0 25px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SkillSection = styled.div`
  font-size: 18px;
  color: #fff;
  border-bottom: 2px solid #ffd700;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  margin-bottom: 30px;

  @media (max-width: 660px) {
    width: 80%;
  }
`;

export const SkillTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;
export const SkillBar = styled.div`
  width: 50%;
`;

export const BarActive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0 100px;
  width: 50%;
  transition: max-height 0.3s ease-out;
  &.active {
    background-color: red;
  }
  @media (max-width: 660px) {
    width: 80%;
  }
`;
