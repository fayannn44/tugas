import { useState } from "react";

export default function StudentTable() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setStudents([...students, name]);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="tambah N ama siswa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Siswa</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
