import React from "react";
import NotesItem from "./NotesItem";

function NotesActive({ notesData, onDeleteNote, onArchiveNote }) {
  let content;
  if (notesData.length === 0) {
    content = <p>Tidak ada catatan</p>;
    console.log(notesData);
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
    <div className="container-notes-active">
      <h1>Catatan Aktif</h1>
      <div className="container-notes-list-active">{content}</div>
    </div>
  );
}

export default NotesActive;
