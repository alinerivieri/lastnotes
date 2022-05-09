import React, { useEffect } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteList } from "../../Context/NotelistContext";
import { useNoteForm } from "../../Context/NoteFormContext";
import { useHighlight } from "../../Context/HighlightContext";

import "./styles.css";

export default function NoteForm() {
  const { noteList, setNoteList } = useNoteList();
  const { title, 
          setTitle, 
          description, 
          setDescription, 
          setVisibleForm } =  useNoteForm();
  const { highlight, setHighlight } = useHighlight();

  useEffect(()=> {
    saveLocalNotes()
  }, [noteList])

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function descriptionHandler(e) {
    setDescription(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (highlight) {
      noteList.map((note) => {
        if (note.id === highlight) {
          note.title = title;
          note.description = description;
        }
      });
      setNoteList([...noteList]);
    } else {
      setNoteList([
        ...noteList,
        {
          id: String(Math.floor(Math.random() * 1000)),
          title,
          description,
        },
      ]);
    }
  }

  function cancelHandler(e) {
    e.preventDefault();
    setHighlight(false)
    setVisibleForm(false);
  }

  function saveLocalNotes() {
    localStorage.setItem("notes", JSON.stringify(noteList))
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Titulo:</label>
        <input
          id="title"
          value={title}
          onChange={titleHandler}
          type="text"
          placeholder="Informe o titulo"
        />
      </div>
      <div>
        <label htmlFor="title">Nota:</label>
        <span>(Máximo 240 caracteres)</span>
        <textarea
          id="title"
          value={description}
          onChange={descriptionHandler}
          rows="10"
          type="text"
          maxLength="240"
          placeholder="Escreva sua nota"
        />
      </div>
      <div className="buttons">
        <button className="cancel" onClick={cancelHandler}>
          <FaBan className="icon" />
        </button>
        <button type="submit" className="confirm" onClick={submitHandler}>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
