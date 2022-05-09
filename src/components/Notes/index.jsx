import React from "react";
import { useHighlight } from "../../Context/HighlightContext";
import { useNoteList } from "../../Context/NotelistContext";
import Note from "../Note";

import './styles.css'

export default function Notes() {

    const {noteList} = useNoteList();
    const {highlight, setHighlight} = useHighlight()

    return (
        <section className="notes">
            {noteList.map((note) => {
                return(
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    description={note.description}
                    highlight={highlight}
                    setHighlight={setHighlight}
                    />   
                )

            })}
        </section>
    )
}