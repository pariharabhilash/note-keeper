import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
`;
