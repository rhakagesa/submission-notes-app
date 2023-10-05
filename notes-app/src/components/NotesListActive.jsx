import React from "react";
import NotesItem from "./NotesItem";

function NotesActive({ notesData, onDeleteNote, onArchiveNote }) {
  return (
    <div>
      <h1>Catatan Aktif</h1>
      {notesData.map((note) => (
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
      ))}
    </div>
  );
}

export default NotesActive;
