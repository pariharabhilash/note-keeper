import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { ColorProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  flexwrap: wrap;
`;

export const CircleWrapper = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${(props: ColorProps) => props.color};
  cursor: pointer;
  border-radius: 50%;
  margin: 3px;
  box-shadow: ${(props: ColorProps) => `${props.color} 0px 0px 0px 14px inset`};
  transform: scale(1);
  transition: transform 100ms ease;
  box-shadow: 0px 0px 2px #888888;
`;

export const CheckIcon = styled(FaCheck)`
  display: block;
  width: 50%;
  margin: auto;
`;
