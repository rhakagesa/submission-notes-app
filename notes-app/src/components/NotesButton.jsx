import React from "react";

function NotesButton({ id, archived, onDeleteNote, onArchiveNote }) {
  return (
    <>
      <button onClick={() => onDeleteNote(id)}>Hapus</button>
      <button onClick={() => onArchiveNote(id, !archived)}>
        {archived ? "Aktif" : "Arsip"}
      </button>
    </>
  );
}

export default NotesButton;
