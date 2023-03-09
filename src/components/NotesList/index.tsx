import React, { useContext, useEffect } from "react";
import Masonry from "react-masonry-css";
import Note from "../Note";
import {
  NoteListTitle,
  Wrapper,
  PaginationWrapper,
  StyledButton,
} from "./styles";
import { NotesContext } from "../../context/notes";
import { INote, TNotes } from "../../types/types";

type SeparatedNotesType = {
  pinnedNotes: TNotes;
  unPinnedNotes: TNotes;
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const NotesList = () => {
  const [state, dispatch] = useContext(NotesContext);
  const notes = state?.notes;
  const totalNotes = notes?.length;
  const currentPage = state?.currentPageNumber || 1;
  const notesPerPage = 6;
  const start = notesPerPage * (currentPage - 1);
  const end = currentPage * notesPerPage - 1;
  const { pinnedNotes, unPinnedNotes } = notes?.slice(start, end).reduce(
    (a, b) => {
      if (b.pinned) a.pinnedNotes.push(b);
      else a.unPinnedNotes.push(b);
      return a;
    },
    { pinnedNotes: [], unPinnedNotes: [] } as SeparatedNotesType
  );
  const hasPinnedNotes = pinnedNotes.length > 0;
  const hasUnpinnedNotes = unPinnedNotes.length > 0;
  const onNext = () => {
    dispatch({ type: "INCREMENT_PAGE" });
  };
  const onPrevious = () => {
    dispatch({ type: "DECREMENT_PAGE" });
  };
  useEffect(() => {
    // console.log(state.currentPageNumber);
  }, [state]);
  const hidePrevious = currentPage < 2;
  const hideNext = totalNotes - notesPerPage * currentPage <= 0;
  return (
    <Wrapper>
      {hasPinnedNotes && <NoteListTitle>Pinned</NoteListTitle>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {pinnedNotes?.map((note: INote) => (
          <Note {...note} key={note.id} />
        ))}
      </Masonry>
      {hasPinnedNotes && hasUnpinnedNotes && (
        <NoteListTitle>Others</NoteListTitle>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {unPinnedNotes?.map((note: INote) => (
          <Note {...note} key={note.id} />
        ))}
      </Masonry>
      {totalNotes > 0 && (
        <PaginationWrapper>
          <StyledButton onClick={onPrevious} disabled={hidePrevious}>
            Previous
          </StyledButton>
          <StyledButton onClick={onNext} disabled={hideNext}>
            Next
          </StyledButton>
        </PaginationWrapper>
      )}
    </Wrapper>
  );
};

export default NotesList;
