import React from "react";

function NotesBody({ title, createdAt, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

export default NotesBody;
