import Note from "./note";
import "./style.css";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Done</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
