import styled from "styled-components";

export const NoteForm = styled.form`
  min-width: 50%;
  border-radius: 8px;
  margin: 20px auto;
  padding: 10px 20px;
`;
export const Input = styled.input`
  background-color: inherit;
  border: none;
  color: rgba(60, 58, 58, 1);
  display: block;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  outline: none;
  word-wrap: break-word;
  word-break: break-all;
  &::placeholder {
    color: rgba(81, 82, 82, 0.91);
    opacity: 1;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const TextArea = styled.textarea`
  background-color: inherit;
  border: none;
  padding-top: 10px;
  color: rgba(60, 58, 58, 1);
  display: block;
  width: 100%;
  font-family: "Noto Sans", sans-serif;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  resize: none;
  overflow: hidden;
  min-height: 10px;
  word-wrap: break-word;
  word-break: break-all;
  &::placeholder {
    color: rgba(81, 82, 82, 0.91);
    opacity: 1;
    font-size: 14px;
    font-weight: 600;
  }
`;
