import React from "react";
import NotesInput from "./NotesInput";
import NotesActive from "./NotesListActive";
import NotesInActive from "./NotesListInActive";
import { getNotesData } from "../utils/data";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notesData: getNotesData(),
    };

    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
  }

  onAddNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        notesData: [
          ...prevState.notesData,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNote(id) {
    const notes = this.state.notesData.filter((note) => note.id !== id);
    this.setState({ notesData: notes });
  }

  onArchiveNote(id, archived) {
    const notesUpdate = this.state.notesData.map((note) => {
      if (note.id === id) {
        return { ...note, archived };
      }
      return note;
    });

    this.setState({ notesData: notesUpdate });
  }

  render() {
    console.log(this.state.notesData);
    return (
      <div>
        <NotesInput addNotes={this.onAddNotes} />
        <NotesActive
          notesData={this.state.notesData.filter((note) => !note.archived)}
          onDeleteNote={this.onDeleteNote}
          onArchiveNote={this.onArchiveNote}
        />
        <NotesInActive
          notesData={this.state.notesData.filter((note) => note.archived)}
          onDeleteNote={this.onDeleteNote}
          onArchiveNote={this.onArchiveNote}
        />
      </div>
    );
  }
}

export default NotesApp;
