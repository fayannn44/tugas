import { useImmer } from "use-immer";
import NoteForm from "./noteForm";
import NoteList from "./noteList";
import "./style.css";

let id = 0;

const initialNotes = [];

export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes);

  function handleAddNote(nama, umur, kelas) {
    setNotes((draft) => {
      draft.push({
        id: id++,
        nama,
        umur,
        kelas,
        done: false,
      });
    });
  }

  function handleChangeNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      draft.splice(index, 1);
    });
  }

  return (
    <div className="container">
      <h1>Student List</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
