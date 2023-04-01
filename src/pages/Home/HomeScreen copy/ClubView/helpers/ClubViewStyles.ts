import styled, { css } from "styled-components";

export const IconEffect = styled.div`
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg);
  box-shadow: 2em 4em 6em -2em rgba(0, 0, 0, 0.5),
    1em 2em 3.5em -2.5em rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border-radius: 0.5em;

  &:hover {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg);
  }
`;
