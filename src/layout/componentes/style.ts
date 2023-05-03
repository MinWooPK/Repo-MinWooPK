import styled from "styled-components";

export const IconsFooter = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  &:hover div {
    transform: translateY(-5px);
  }
`;

export const Icon = styled.div``;
