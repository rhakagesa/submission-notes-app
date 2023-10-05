import React from "react";

function NotesButton({ id, archived }) {
  return (
    <>
      <button onClick={() => onDeleteNote(id)}>Hapus</button>
      <button onClick={() => onArchiveNote(id, archived)}>Archive</button>
    </>
  );
}

export default NotesButton;
