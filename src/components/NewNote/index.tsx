import React, { useState, useRef, useContext } from "react";
import CircleColorPicker, { colors } from "../CircleColorPicker";
import { useOuterClick } from "./hooks";
import { Wrapper, NoteForm, Input, TextArea } from "./styles";
import { NotesContext } from "../../context/notes";
import { addDocAsync } from "../../firebase";

const emptyNote = { title: "", text: "", color: colors[0].hex, label: "", pinned: false };

const NewNote = () => {
  const [showTitle, setShowTitle] = useState(false);
  const dispatch = useContext(NotesContext)[1];
  const [note, setNote] = useState(emptyNote);
  const textAreaRef = useRef<HTMLInputElement>(null);
  const autoGrow = (elem: any) => {
    elem.current.style.height = "5px";
    elem.current.style.height = 10 + elem.current.scrollHeight + "px";
  };
  const onClickOutside = async (e: any) => {
    setShowTitle(false);
    if (note.title || note.text) {
      const newDoc = await addDocAsync(note);
      dispatch({
        type: "ADD_NOTE",
        payload: {
          ...note,
          id: newDoc.id,
        },
      });
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
    setShowTitle(true);
    textAreaRef?.current?.focus();
  };
  return (
    <Wrapper>
      <NoteForm ref={formRef}>
        {showTitle && (
          <Input
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onInputChange}
          />
        )}
        <TextArea
          name="text"
          placeholder="Take a note ..."
          onFocus={onTextAreaFocus}
          onInput={() => autoGrow(textAreaRef)}
          value={note.text}
          onChange={onInputChange}
          ref={textAreaRef}
        />
        {showTitle && (
          <Input
            placeholder="Label note"
            name="label"
            value={note.label}
            onChange={onInputChange}
          />
        )}
        {showTitle && (
          <CircleColorPicker colors={colors} onChange={onColorChangeHandler} />
        )}
      </NoteForm>
    </Wrapper>
  );
};

export default NewNote;
