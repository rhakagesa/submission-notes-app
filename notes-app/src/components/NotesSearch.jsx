import React from "react";

function NotesSearch({ searchByTitle, onSearchEventHandler }) {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul..."
      value={searchByTitle}
      onChange={onSearchEventHandler}
    />
  );
}

export default NotesSearch;
