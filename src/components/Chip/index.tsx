import React from "react";
import { Wrapper, DeleteButton } from "./styles";

type Props = {
  name?: string;
  onDelete: () => void;
};

const Chip = ({ onDelete, name }: Props) => {
  return (
    <Wrapper>
      {name}
      <DeleteButton onClick={onDelete}>&times;</DeleteButton>
    </Wrapper>
  );
};

export default Chip;
