import { INote, TNotesState, NoteActions } from "../types/types";
import { colors } from "../components/CircleColorPicker";

export const emptyNote = {
  title: "",
  text: "",
  color: colors[0].hex,
  label: "",
  id: "",
  pinned: false,
};

export const reducer = (state: TNotesState, action: any) => {
  switch (action.type) {
    case NoteActions.ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case NoteActions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note: INote) => note.id !== action.payload),
      };
    case NoteActions.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note: INote) => {
          if (note.id === action.payload.id) {
            return action.payload;
          } else {
            return note;
          }
        }),
      };
    case NoteActions.SET_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    case NoteActions.SHOW_EDIT_MODAL:
      return {
        ...state,
        showModal: true,
        editNote: action.payload,
      };
    case NoteActions.HIDE_EDIT_MODAL:
      return {
        ...state,
        showModal: false,
        editNote: emptyNote,
      };
    case NoteActions.INCREMENT_PAGE:
      return {
        ...state,
        currentPageNumber: state.currentPageNumber + 1,
      };
    case NoteActions.DECREMENT_PAGE:
      return {
        ...state,
        currentPageNumber: state.currentPageNumber - 1,
      };
    default:
      return state;
  }
};
