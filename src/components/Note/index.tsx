import React, { useContext } from "react";
import { INote, NoteActions } from "../../types/types";
import Chip from "../Chip";
import { deleteDocById, updateDocAsync } from "../../firebase";
import { NotesContext } from "../../context/notes";
import {
  Wrapper,
  Title,
  Text,
  BottomSection,
  IconWrapper,
  EditIcon,
  DeleteIcon,
  PinIcon,
  PinnedIcon,
  Head,
} from "./styles";

const Note = ({ title, pinned, text, color, id, label }: INote) => {
  const dispatch = useContext(NotesContext)[1];
  const { EDIT_NOTE, SHOW_EDIT_MODAL } = NoteActions;
  const onDelete = async () => {
    await deleteDocById(id);
    dispatch({ type: NoteActions.DELETE_NOTE, payload: id });
  };
  const onPinned = async () => {
    await updateDocAsync({ pinned: true }, id);
    dispatch({
      type: EDIT_NOTE,
      payload: { title, text, color, label, id, pinned: true },
    });
  };
  const onRemovePin = async (e: any) => {
    e.stopPropagation();
    await updateDocAsync({ pinned: false }, id);
    dispatch({
      type: EDIT_NOTE,
      payload: { title, text, color, label, id, pinned: false },
    });
  };
  const onRemoveLabel = async () => {
    await updateDocAsync({ label: "" }, id);
    dispatch({
      type: EDIT_NOTE,
      payload: { title, text, color, label: "", id, pinned },
    });
  };
  const onEditNote = () => {
    dispatch({
      type: SHOW_EDIT_MODAL,
      payload: { title, pinned, text, color, id, label },
    });
  };
  return (
    <Wrapper color={color}>
      <div onClick={onEditNote}>
        <Head>
          <Title>{title}</Title>
          {pinned && <PinnedIcon size="15px" onClick={onRemovePin} />}
        </Head>
        <Text>{text}</Text>
      </div>
      <BottomSection label={label}>
        {label && <Chip name={label} onDelete={onRemoveLabel} />}
        <IconWrapper>
          {!pinned && <PinIcon size="15px" onClick={onPinned} />}
          <EditIcon size="15px" onClick={onEditNote} />
          <DeleteIcon size="15px" onClick={onDelete} />
        </IconWrapper>
      </BottomSection>
    </Wrapper>
  );
};

export default Note;
