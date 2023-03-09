import React, { useContext, useEffect, useRef, useState } from "react";
import { NotesContext } from "../../context/notes";
import { updateDocAsync } from "../../firebase";
import CircleColorPicker, { colors } from "../CircleColorPicker";
import { useOuterClick } from "../NewNote/hooks";
import { Input, NoteForm, TextArea } from "./styles";
import Dialog from "../Dialog";
import { NoteActions } from "../../types/types";

const emptyNote = {
  title: "",
  text: "",
  color: "",
  label: "",
  id: "",
  pinned: false,
};

const EditNoteModal = () => {
  const [state, dispatch] = useContext(NotesContext);
  const { editNote } = state;
  const [note, setNote] = useState(editNote);
  const textAreaRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const autoGrow = (elem: any) => {
    elem.current.style.height = "5px";
    elem.current.style.height = 10 + elem.current.scrollHeight + "px";
  };
  const onClickOutside = async (e: any) => {
    if (note.title || note.text) {
      await updateDocAsync(note, note.id);
      dispatch({
        type: NoteActions.EDIT_NOTE,
        payload: {
          ...note,
        },
      });
      dispatch({ type: NoteActions.HIDE_EDIT_MODAL });
      setNote(emptyNote);
    }
  };
  const formRef = useOuterClick(onClickOutside);
  const onColorChangeHandler = (color: string) =>
    setNote((n) => ({ ...n, color }));
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((n) => ({ ...n, [name]: value }));
  };
  const onTextAreaFocus = () => {
    textAreaRef?.current?.focus();
  };
  const onTitleFocus = () => {
    titleInputRef?.current?.focus();
  };
  useEffect(() => {
    setNote(state.editNote);
  }, [state]);
  const selectedColor = colors.map((c) => {
    c.selected = c.hex === note.color;
    return c;
  });
  useEffect(() => {
    autoGrow(textAreaRef);
    autoGrow(titleInputRef);
  });
  return (
    <Dialog show={state.showModal} bgColor={note.color || colors[0].hex}>
      <NoteForm ref={formRef}>
        <TextArea
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={onInputChange}
          ref={titleInputRef}
          onFocus={onTitleFocus}
          onInput={() => autoGrow(titleInputRef)}
        />
        <TextArea
          name="text"
          placeholder="Take a note ..."
          onFocus={onTextAreaFocus}
          onInput={() => autoGrow(textAreaRef)}
          value={note.text}
          onChange={onInputChange}
          ref={textAreaRef}
        />
        <Input
          placeholder="Label note"
          name="label"
          value={note.label}
          onChange={onInputChange}
        />
        <CircleColorPicker
          colors={selectedColor}
          onChange={onColorChangeHandler}
        />
      </NoteForm>
    </Dialog>
  );
};

export default EditNoteModal;
