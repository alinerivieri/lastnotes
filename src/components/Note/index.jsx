import React from "react";
import { useHighlight } from "../../Context/HighlightContext";
import { useNoteForm } from "../../Context/NoteFormContext";

import './styles.css'

export default function Note({id, title, description}) {

    const { highlight,setHighlight } = useHighlight();
    const { setVisibleForm } = useNoteForm();

    return (
        <div 
            id={id}            
            className={`note ${highlight === id && " highlight"}`}
            onClick={()=> {
                if(highlight === id) {
                    setHighlight(false)
                    setVisibleForm(false)
                } else {
                    setHighlight(id)
                    setVisibleForm(true)
                }
            }}
        >
            <h2 className="title">{title}</h2>
            <hr />
            <p className="note-description">{description}</p>
        </div>
    )
}