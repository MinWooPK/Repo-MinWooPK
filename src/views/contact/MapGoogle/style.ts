import styled from "styled-components";

export const ContainerMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const IframeMap = styled.iframe`
  width: 90%;
  height: 80%;
  border-radius: 12px;
  border: 5px solid rgba(40, 44, 52, 0.7);
`;

export const ImgVision = styled.img`
  right: 4%;
  bottom: 10%;
  position: absolute;
  width: 40%;
  transform: scaleX(-1);
`;
