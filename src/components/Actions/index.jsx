import React from "react";
import { FaPlus, FaPencilAlt, FaTrash} from "react-icons/fa"
import { useNoteForm } from "../../Context/NoteFormContext";
import { useHighlight } from "../../Context/HighlightContext";
import { useNoteList } from "../../Context/NotelistContext";
import './styles.css'


export default function Actions() {

    const {visibleForm, setVisibleForm, setTitle, setDescription} = useNoteForm();
    const {highlight, setHighlight} = useHighlight();
    const {noteList, setNoteList} = useNoteList();

    function createHandler() {
        if(visibleForm && highlight){
            setTitle("");
            setDescription("");
            setHighlight(false);
        } else {
            setVisibleForm(!visibleForm)
        }
    }

    function editHandler() {
        if(highlight) {
            const highlightedNote = noteList.find((note) => note.id === highlight);
            setTitle(highlightedNote.title);
            setDescription(highlightedNote.description);
            setVisibleForm(!visibleForm);
        }
    }

    function deleteHandler() {
        if(highlight) {
            setTitle("");
            setDescription("");
            setHighlight(false);

            const highlightedNote = noteList.findIndex((note) => note.id === highlight)
            noteList.splice(highlightedNote, 1)

            setNoteList([...noteList])
        }
    }

    return (
        <div className="actions">
            <button className="create" onClick={createHandler} >
                <FaPlus className="icon"/>
            </button>
            <button className="edit">
                <FaPencilAlt className= {`icon ${!highlight && "disabled"}`} onClick={editHandler} />
            </button>
            <button className="delete">
                <FaTrash className= {`icon ${!highlight && "disabled"}`} onClick={deleteHandler}/>
            </button>
        </div>
    )
}