import React from "react";
import NotesItem from "./NotesItem";

function NotesInActive({ notesData, onDeleteNote, onArchiveNote }) {
  let content;
  if (notesData.length === 0) {
    content = <p>Data arsip kosong</p>;
  } else {
    content = notesData.map((note) => (
      <NotesItem
        {...note}
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      />
    ));
  }

  return (
    <div>
      <h1>Archive</h1>
      {content}
    </div>
  );
}

export default NotesInActive;
