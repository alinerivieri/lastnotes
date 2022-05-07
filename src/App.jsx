import Header from "./components/Header";
import Logo from "./components/Logo";
import Actions from "./components/Actions";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";

export function App() {
  return (
    <div className="app">
      <Header>
        <Logo/>
        <Actions/>
      </Header>
      <NotesArea>
        <Notes/>
      </NotesArea>
    </div>
  );
}

