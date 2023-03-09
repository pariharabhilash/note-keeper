import styled from "styled-components";

export const Wrapper = styled.span`
  display: inline-block;
  padding: 7px 10px 7px 15px;
  font-size: 13px;
  border-radius: 30px;
  line-height: 10px;
  background-color: rgb(211 204 204);
  color: rgba(60, 58, 58, 1);
  font-weight: 500;
  &:hover {
    > span {
      opacity: .8;
    }
  }
`;

export const DeleteButton = styled.span`
  padding-left: 0px;
  float: right;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
`;
