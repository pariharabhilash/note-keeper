import React from "react";
import { HeaderWrapper, ImageWrapper, Image, Title } from "./styles";
import NoteKeeperLogo from "../../assets/note-keeper-logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <ImageWrapper>
        <Image src={NoteKeeperLogo} alt="Note keeper logo" />
      </ImageWrapper>
      <Title>Note Keeper</Title>
    </HeaderWrapper>
  );
};

export default Header;
