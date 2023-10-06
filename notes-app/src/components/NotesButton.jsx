import React from "react";

function NotesButton({ id, archived, onDeleteNote, onArchiveNote }) {
  return (
    <div className="container-button">
      <button onClick={() => onDeleteNote(id)} className="delete-button">
        Hapus
      </button>
      <button
        onClick={() => onArchiveNote(id, !archived)}
        className="archive-button"
      >
        {archived ? "Aktif" : "Arsip"}
      </button>
    </div>
  );
}

export default NotesButton;
