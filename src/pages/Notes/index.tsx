import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Wrapper, Main } from "./styles";
import { Header, NewNote, NotesList } from "../../components";
import { NotesProvider } from "../../context/notes";
import EditNoteModal from "../../components/EditNoteModal";
import ErrorFallback from "../../components/ErrorFallback";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notes = () => {
  const errorHandler = (error: Error, info: { componentStack: string }) => {
    toast("Something went wrong. please try again !!!", {
      type: toast.TYPE.ERROR,
    });
  };
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={() => {}}
    >
      <NotesProvider>
        <Wrapper>
          <Header />
          <Main>
            <NewNote />
            <EditNoteModal />
            <NotesList />
          </Main>
        </Wrapper>
        <ToastContainer />
      </NotesProvider>
    </ErrorBoundary>
  );
};

export default Notes;
