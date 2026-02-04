import { useState } from "react";
import "./style.css";

export default function NoteForm({ onAddNote }) {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddNote(nama, umur, kelas);
    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
      />

      <input
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}
