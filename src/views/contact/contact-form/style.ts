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

const InputBackground = `linear-gradient(to right , #FFFFFF, #D9D9D9, #B3B3B3, #8C8C8C)`;

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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 30px 0;
`;
export const ContactTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: white;
`;
export const ContactDetail = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 400;
`;

export const FormContent = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;

  @media (max-width: 1080px) {
    width: 97%;
  }
  @media (max-width: 1080px) {
    width: 95%;
  }
`;
export const InputContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

export const InputFirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  > div {
    width: 50%;
  }
`;

export const InputOtherSection = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  padding: 20px 0;
  border-radius: 5px;
  border: none;
  transition: all 0.3s;
  width: calc(100% - 20px);
  background: ${InputBackground};
  padding-left: 20px;

  & + label {
    position: absolute;
    top: 30%;
    left: 20px;
    pointer-events: none;
    transition: all 0.2s ease-out;
    font-size: 14px;
    color: #999;
  }

  &.has-value + label,
  &:focus + label {
    top: 4px;
    font-size: 10px;
    color: #666;
  }
`;

export const InputText = styled.textarea`
  border-radius: 5px;
  border: 1px solid #ccc;
  background: ${InputBackground};
  transition: all 0.3s;
  width: -webkit-fill-available;
  border: none;
  min-height: 100px;
  resize: none;
  padding: 20px 20px 0;

  & + label {
    position: absolute;
    top: 12px;
    left: 20px;
    pointer-events: none;
    transition: all 0.2s ease-out;
    font-size: 14px;
    color: #999;
  }

  &.has-value + label,
  &:focus + label {
    top: 4px;
    font-size: 10px;
    color: #666;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContact = styled.button`
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
    ${buttonAnimation} 2s ease-in-out infinite;
`;

interface MessageProps {
  success?: boolean;
}

export const Message = styled.div<MessageProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ success }: MessageProps) =>
    success ? "#d4edda" : "#f8d7da"};
  color: ${({ success }: MessageProps) => (success ? "#155724" : "#721c24")};
`;
