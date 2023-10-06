import React from "react";
import NotesBody from "./NotesBody";
import NotesButton from "./NotesButton";
function NotesItem({
  id,
  title,
  body,
  archived,
  createdAt,
  onDeleteNote,
  onArchiveNote,
}) {
  return (
    <div className="container-notes-item">
      <NotesBody title={title} createdAt={createdAt} body={body} />
      <NotesButton
        id={id}
        archived={archived}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
      />
    </div>
  );
}

export default NotesItem;
