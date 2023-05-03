import styled, { keyframes } from "styled-components";

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

const buttonAnimation = keyframes`
  0% {
    color:  rgba(255, 255, 255, 0.6);
  }
  40% {
   color:  rgba(255, 255, 255, 1);
  }
  100% {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px 20px;
  width: 70%;
  z-index: 10;
  border: 2px solid rgb(40, 47, 43);
  background: linear-gradient(
    to right,
    rgba(51, 51, 51, 0.4),
    rgba(102, 102, 102, 1)
  );
  border-radius: 12px;
`;
export const ImgContainer = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

export const ImgModal = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(40, 47, 43);
  object-fit: cover;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const DetailModal = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1080px) {
    width: 100%;
    gap: 20px;
  }
`;

export const ModalWrap = styled.div`
  gap: 20px;
  display: flex;
  height: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;
export const TitleModal = styled.h1`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;
export const InfoModal = styled.p`
  font-size: 14px;
  text-align: justify;
  line-height: 1.8;
  color: #fff;
  margin: 0;
  width: 90%;
`;

export const HrefModal = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #ffd700;
  border-radius: 1px;
  padding: 15px 25px;
  font-size: 10px;
  letter-spacing: 5px;
  color: ${buttonAnimation};
  animation: ${shineAnimation} 2s ease-in-out infinite,
    ${buttonAnimation} 2s ease-in-out infinite;
`;

export const IconContainer = styled.div`
  margin: 5px 5px 0 0;
  cursor: pointer;
`;
export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const BurgerOpen = keyframes`
  from {
    transform: translate(-50%,-100%);
  }
  to {
  transform: translate(-50%, -50%);  }
`;

const BurgerClose = keyframes`
  from {
  transform: translate(-50%, -50%); 
}
to {
opacity: 1;
    transform: translate(-50%,-200%); }
`;

interface ModalProps {
  isAnimating: boolean;
  showModal: boolean;
}

export const ModalBurger = styled.div<ModalProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px 20px;
  width: 100%;
  height: 100%;
  z-index: 10;
  border: 2px solid rgb(40, 47, 43);
  background: linear-gradient(
    to right,
    rgba(51, 51, 51, 0.8),
    rgba(102, 102, 102, 1)
  );
  border-radius: 12px;
  animation: ${({ showModal, isAnimating }) =>
      showModal && !isAnimating ? BurgerOpen : BurgerClose}
    0.8s;
`;

export const CloseBurger = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px;
  color: red;
`;

export const BurgerDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
`;
