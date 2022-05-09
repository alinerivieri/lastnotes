import React from "react";
import { useNoteForm } from "../../Context/NoteFormContext";
import NoteForm from "../NoteForm";

import "./styles.css";

export default function NotesArea({ children }) {
  const {visibleForm} = useNoteForm();

  return (
    <article className="notes-area">
      {children}
      {visibleForm && <NoteForm />}
    </article>
  );
}
