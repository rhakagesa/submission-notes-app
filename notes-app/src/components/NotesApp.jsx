import React from "react";
import { getNotesData } from "../utils/data";
import NotesInput from "./NotesInput";
import NotesActive from "./NotesListActive";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notesData: getNotesData(),
    };

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
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    console.log(this.state.notesData);
    return (
      <div>
        <NotesInput addNotes={this.onAddNotes} />
        <NotesActive notesData={this.state.notesData} />
      </div>
    );
  }
}

export default NotesApp;
