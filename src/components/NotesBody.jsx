import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesBody({ title, createdAt, body }) {
  return (
    <div className="container-notes-body">
      <h2>{title}</h2>
      <h5>{showFormattedDate(createdAt)}</h5>
      <p>{body}</p>
    </div>
  );
}

export default NotesBody;
