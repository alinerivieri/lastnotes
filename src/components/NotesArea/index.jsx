import React from "react";

import './styles.css'

export default function NotesArea( {children} ) {
    return (
        <article className="notes-area">
            {children}
        </article>
    )
}
