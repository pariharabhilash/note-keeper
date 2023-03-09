import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsPinFill, BsPin } from "react-icons/bs";
import { INote } from "../../types/types";

export const Wrapper = styled.div`
  padding: 20px;
  border: ${(props: INote) => `1px solid ${props.color}`};
  border-radius: 8px;
  text-align: left;
  margin: 10px;
  width: 250px;
  background-color: ${(props: INote) => props.color};
  padding-bottom: 10px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  width: 85%;
`;

export const Text = styled.p`
  padding: 0;
  margin: 20px 0 10px 0;
  min-height: 30px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: none;
  font-family: "Roboto Slab", serif;
`;

export const EditIcon = styled(FaEdit)`
  color: rgba(60, 58, 58, 1);
  padding: 8px;
  &:hover {
    border-radius: 50%;
    background-color: #d3d3d36b;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  color: rgba(60, 58, 58, 1);
  padding: 8px;
  &:hover {
    border-radius: 50%;
    background-color: #d3d3d36b;
    cursor: pointer;
  }
`;

export const PinIcon = styled(BsPin)`
  color: rgba(60, 58, 58, 1);
  padding: 8px;
  font-size: 60px;
  &:hover {
    border-radius: 50%;
    background-color: #d3d3d36b;
    cursor: pointer;
  }
`;

export const PinnedIcon = styled(BsPinFill)`
  color: rgba(60, 58, 58, 1);
  padding: 8px;
  font-size: 60px;
  &:hover {
    border-radius: 50%;
    background-color: #d3d3d36b;
    cursor: pointer;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: INote) => (props.label ? "space-between" : "flex-end")};
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  column-gap: 5px;
`;
