import styled from "styled-components";

interface ArrowProps {
  isActive: boolean;
}

const StyledArrow = styled.svg<{ isActive: boolean }>`
  width: 25px;
  height: 25px;
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease-in-out;
`;

export const ArrowDown = ({ isActive }: ArrowProps) => {
  return (
    <StyledArrow isActive={isActive}>
      <path
        d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
        transform="matrix(-.00013.03541.03541.00013 3.02 2.988)"
        fill="#fff"
      />
    </StyledArrow>
  );
};
