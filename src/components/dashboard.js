import React from "react";
import { createNote, getNotes } from "../services/apicall";
import { markdownParser } from "../services/markdown";
import "../App.css";

export default function Dashboard(props) {
  const [note, setNote] = React.useState({
    user: this.props.location.state.info.userid,
    title: "",
    content: "",
  });

  // function handling creation of note
  const handleForm = (event) => {
    event.preventDefault();
    createNote(note);
  };

  const formChange = (event) => {
    const { id, value } = event.target;
    setNote((pervdata) => {
      return {
        ...pervdata,
        [id]: value,
      };
    });
  };

  // using react hook "useState" for user notes
  const [userNotes, setUserNotes] = React.useState(getNotes());

  // list user notes in dashboard's navbar
  const listNotes = userNotes.length===0 ? "<p>You have no notes yet</p>": userNotes.map((item) => (
    <button key={item._id} onClick={displayNotes(item._id)}>
      {item.title}
    </button>
  ));

  // display indivizual note when user clicks on "note title"
  const display = document.querySelector(".display");
  const displayNotes = (id) => {
    userNotes.map((item) => {
      if (item._id === id) {
        display.innerHTML = `
                    <h1>${item.title}</h1>
                    <p>${markdownParser(item.body)}</p>
                `;
      }
    });
  };

  // handle create note button
  const notebutton = () => {
    const form = document.querySelector('.form')
    form.style.display = "block"
  }
  
  return (
    <div className="dashboard">
      <div className="nav">
        {this.props.location.state.info.username}
        {listNotes}
        <button type="button" onClick={notebutton}></button>
      </div>
      <div className="notebook">
        <div className="display"></div>
        <div className="notearea">
          <form onSubmit={handleForm} className="form" style={{display: 'none'}}>
            <label for="title">Title: </label> <br />
            <input
              type="text"
              id="title"
              placeholder="Title for your note"
              value={note.title}
              onChange={formChange}
            />
            <textarea
              id="note"
              cols="30"
              rows="10"
              value={note.content}
              onChange={formChange}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}
