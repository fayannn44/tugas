import { useState } from "react";
import "./style.css";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDoneChange(e) {
    onChange({ ...note, done: e.target.checked });
  }

  function handleNamaChange(e) {
    onChange({ ...note, nama: e.target.value });
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleDoneChange}
        />
      </td>

      <td>
        {isEditing ? (
          <input value={note.nama} onChange={handleNamaChange} />
        ) : (
          note.nama
        )}
      </td>

      <td>{note.umur}</td>
      <td>{note.kelas}</td>

      <td>
        {isEditing ? (
          <button onClick={() => setIsEditing(false)}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="danger" onClick={() => onDelete(note)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
