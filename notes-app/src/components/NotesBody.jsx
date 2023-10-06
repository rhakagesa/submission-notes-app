import React from "react";

function NotesBody({ title, createdAt, body }) {
  return (
    <div className="container-notes-body">
      <h2>{title}</h2>
      <h5>{createdAt}</h5>
      <p>{body}</p>
    </div>
  );
}

export default NotesBody;
