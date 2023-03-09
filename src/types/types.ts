export interface INote {
  id: string;
  title?: string;
  pinned?: boolean;
  text?: string;
  color?: string;
  label?: string;
}

export interface INewNote {
  id?: string;
  title?: string;
  pinned?: boolean;
  text?: string;
  color?: string;
  label?: string;
}

export type TNotes = Array<INote>;

export type TNotesState = {
  notes: Array<INote>;
  loading: boolean;
  error: any;
  showModal: boolean;
  editNote: INote;
  currentPageNumber: number;
};
export enum NoteActions {
  ADD_NOTE = "ADD_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  EDIT_NOTE = "EDIT_NOTE",
  SET_NOTE = "SET_NOTE",
  SHOW_EDIT_MODAL = "SHOW_EDIT_MODAL",
  HIDE_EDIT_MODAL = "HIDE_EDIT_MODAL",
  INCREMENT_PAGE = "INCREMENT_PAGE",
  DECREMENT_PAGE = "DECREMENT_PAGE",
}

export type AddActionType = {
  type: string;
  payload?: any;
};
export type NoteActionTypes = AddActionType;
