import styled, { keyframes } from "styled-components";

export const UserIcon = () => {
  const changeColor = keyframes`
  0% {
    fill: #FDE68A; 
  }
  50% {
    fill: #FDBA74; 
  }
  100% {
    fill: #FFDAB9}
`;

  const StyledPath = styled.path`
    animation: ${changeColor} 1s ease-in-out infinite;
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="30"
      height="30"
    >
      <StyledPath d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
      <StyledPath d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
    </svg>
  );
};

export const UserIconInactive = () => {
  const StyledPath = styled.path`
    fill: black;
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="30"
      height="30"
    >
      <StyledPath d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
      <StyledPath d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
    </svg>
  );
};
