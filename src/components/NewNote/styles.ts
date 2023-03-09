import styled from "styled-components";

export const Wrapper = styled.div`
  .circle-picker-border {
    > span > div > span > div {
      border: 1px solid grey;
    }
  }
`;

export const NoteForm = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  width: 60%;
  min-width: 250px;
  max-width: 600px;
  border-radius: 8px;
  margin: 20px auto;
  padding: 10px 20px;
`;
export const Input = styled.input`
  border: none;
  color: rgba(60, 58, 58, 1);
  display: block;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  // display:none;
  outline: none;
  &::placeholder {
    color: rgba(81, 82, 82, 0.91);
    opacity: 1;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const TextArea = styled.textarea`
  border: none;
  padding-top: 10px;
  color: rgba(60, 58, 58, 1);
  display: block;
  width: 100%;
  font-family: "Noto Sans", sans-serif;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  /* height:100%; */
  resize: none;
  overflow: hidden;
  min-height: 10px;
  &::placeholder {
    color: rgba(81, 82, 82, 0.91);
    opacity: 1;
    font-size: 14px;
    font-weight: 600;
  }
`;
