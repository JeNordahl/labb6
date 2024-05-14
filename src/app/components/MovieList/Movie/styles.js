import styled from "styled-components";

export const StyledMovie = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  text-align: left;
  > * {
    margin: 10px;
  }
  align-items: center;
  border: 1px solid white;
  background-color: #41524f;
`;

export const StyledImage = styled.img`
  max-width: 150px;
  max-height: 200px;
`;