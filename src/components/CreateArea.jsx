import React, { useState } from "react";
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    function handleExpansion() {
        setExpanded(true);
    }


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
        title: "",
        content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
        <form className="create-note">
            {isExpanded && <input
                name = "title"
                onChange = {handleChange}
                value = {note.title}
                placeholder = "Title"
            />
            }

            <textarea
                name = "content"
                onClick = {handleExpansion}
                onChange = {handleChange}
                value = {note.content}
                placeholder = "Take a note..."
                rows = {isExpanded ? 3 : 1}
            />

            {isExpanded && <Zoom in = {true}>
                <Fab onClick = {submitNote}>
                    <AddTwoToneIcon />
                </Fab>
            </Zoom>}
        </form>
        </div>
    );
}

export default CreateArea;
