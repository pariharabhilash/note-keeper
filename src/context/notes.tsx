import React, { useReducer, createContext, useEffect } from "react";
import { NoteActionTypes, TNotesState, NoteActions } from "../types/types";
import { getDocs } from "@firebase/firestore";
import { collectionRef } from "../firebase";
import { emptyNote, reducer } from "./reducer";

const initialState = {
  notes: [],
  loading: false,
  error: null,
  showModal: false,
  editNote: emptyNote,
  currentPageNumber: 1,
};
export const NotesContext = createContext<
  [TNotesState, React.Dispatch<NoteActionTypes>]
>([initialState, () => {}]);

export const NotesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getNotes() {
      const querySnapshot = await getDocs(collectionRef);
      const notes: any = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        notes.push({ id: doc.id, ...doc.data() });
      });
      dispatch({ type: NoteActions.SET_NOTE, payload: notes });
    }
    getNotes();
  }, []);
  return (
    <NotesContext.Provider value={[state, dispatch]}>
      {children}
    </NotesContext.Provider>
  );
};
