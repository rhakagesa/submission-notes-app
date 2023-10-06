import React from "react";
import { getNotesData } from "../utils/data";
import NotesInput from "./NotesInput";
import NotesActive from "./NotesListActive";
import NotesInActive from "./NotesListInActive";
import NotesSearch from "./NotesSearch";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notesData: getNotesData(),
      searchResults: [],
    };

    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(searchValue) {
    const filteredNotes = this.state.notesData.filter((note) =>
      note.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    this.setState({ searchResults: filteredNotes });
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
      <>
        <header className="container-notes-search">
          <h1>Notes App</h1>
          <NotesSearch addSearch={this.onSearch} />
        </header>
        <div className="container-notes-app">
          <NotesInput addNotes={this.onAddNotes} />
          <NotesActive
            notesData={
              this.state.searchResults.length > 0
                ? this.state.searchResults.filter((note) => !note.archived)
                : this.state.notesData.filter((note) => !note.archived)
            }
            onDeleteNote={this.onDeleteNote}
            onArchiveNote={this.onArchiveNote}
          />
          <NotesInActive
            notesData={
              this.state.searchResults.length > 0
                ? this.state.searchResults.filter((note) => note.archived)
                : this.state.notesData.filter((note) => note.archived)
            }
            onDeleteNote={this.onDeleteNote}
            onArchiveNote={this.onArchiveNote}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
