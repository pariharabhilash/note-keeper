import React from "react";
import { Container, Modal } from "./styles";

type Props = {
  show: boolean;
  children: React.ReactNode;
  bgColor: string;
};
const Dialog = ({ show, children, bgColor }: Props) => {
  return (
    <Modal show={show}>
      <Container bgColor={bgColor}>{children}</Container>
    </Modal>
  );
};

export default Dialog;
