import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BarActive = styled.div`
  margin: 10px 0;
  width: 50%;
  @media (max-width: 660px) {
    width: 80%;
  }
`;
export const BarInfo = styled.div`
  font-size: 16px;
  color: #fff;
  padding: 0 0 5px 0;
  animation: ${appearAnimation} 1s ease-out forwards;
`;
export const progressAnimationEmpty = (width: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;
export const BarSkill = styled.div`
  width: 0;
  background-color: #444;
  height: 8px;
  border: 1 solid grey;
  position: relative;
  border-radius: 12px;
  animation: ${progressAnimationEmpty(100)} 2s forwards;
  animation-fill-mode: forwards;
  animation-delay: 1200ms;
`;

export const progressAnimation = (width: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width}%;
  }
  
`;

interface BarSkillProgressProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
}

export const BarSkillProgress = styled.div<BarSkillProgressProps>`
  position: absolute;
  width: 0;
  background: linear-gradient(to right, #2a5c85, #0f2a3c);
  height: 8px;
  border: 1 solid grey;
  border-radius: 12px;
  animation-name: ${({ width }) => progressAnimation(width)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 2700ms;
`;

export const fadeInBubble = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const BubbleDialogue = styled.span`
  position: absolute;
  top: -30px;
  left: calc(100% - 22px);
  background-color: rgb(255, 215, 0);
  color: #000;
  font-size: 12px;
  font-weight: 500;
  padding: 1px 8px;
  border-radius: 3px;
  visibility: hidden;
  z-index: 1;
  animation: ${fadeInBubble} 1s ease-out forwards 3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    right: 12px;
    border-width: 8px;
    border-style: solid;
    border-color: rgb(255, 215, 0) transparent transparent transparent;
  }
`;
