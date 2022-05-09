import Header from "./components/Header";
import Logo from "./components/Logo";
import Actions from "./components/Actions";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";
import HighlightProvider from "./Context/HighlightContext";
import NotelistProvider from "./Context/NotelistContext";
import NoteFormProvider from "./Context/NoteFormContext";

export function App() {
  return (
    <NoteFormProvider>
      <NotelistProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </HighlightProvider>
      </NotelistProvider>
    </NoteFormProvider>
  );
}

