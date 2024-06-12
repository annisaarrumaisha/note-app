// Impor React dan hook useState dari library React.
import React, { useState } from "react";

// Impor komponen layar utama dan layar lainnya.
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

// Fungsi untuk memilih dan menampilkan komponen halaman yang sesuai berdasarkan nilai `currentPage`
const CurrentPageWidget = ({
  currentPage, // Halaman yang saat ini aktif
  noteList, // Daftar semua catatan
  setCurrentPage, // Fungsi untuk mengubah halaman yang aktif
  addNote, // Fungsi untuk menambahkan catatan
  deleteNote, // Fungsi untuk menghapus catatan
  editNote, // Fungsi untuk mengedit catatan
  editingNote, // Catatan yang sedang diedit
  setEditingNote, // Fungsi untuk menentukan catatan yang sedang diedit
  searchQuery, // Query pencarian
  setSearchQuery, // Fungsi untuk mengubah query pencarian
}) => {
  switch (currentPage) {
    case "home":
      // Tampilkan layar utama (Home) dengan daftar catatan, fungsi deleteNote, dan fungsi setEditingNote
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      );
    case "add":
      // Tampilkan layar untuk menambahkan catatan baru (AddNote)
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      // Tampilkan layar untuk mengedit catatan (EditNote)
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          editingNote={editingNote}
        />
      );
    default:
      // Default ke layar utama jika currentPage tidak dikenal
      return <Home />;
  }
};

const App = () => {
  // State untuk menyimpan halaman yang sedang ditampilkan
  const [currentPage, setCurrentPage] = useState("home");

  // State untuk menyimpan daftar catatan
  const [noteList, setNoteList] = useState([
    {
      id: 1, // ID unik untuk catatan
      title: "Note pertama", // Judul catatan
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry", // Deskripsi catatan
    },
  ]);

  // State untuk menyimpan catatan yang sedang diedit
  const [editingNote, setEditingNote] = useState(null);

  // State untuk menyimpan query pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menambahkan catatan baru ke dalam daftar
  const addNote = (title, desc) => {
    // Tentukan ID baru untuk catatan, increment dari ID terakhir atau 1 jika kosong
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    // Tambahkan catatan baru ke dalam daftar
    setNoteList([
      ...noteList,
      {
        id, // ID unik catatan baru
        title, // Judul catatan baru
        desc, // Deskripsi catatan baru
      },
    ]);
  };

  // Fungsi untuk menghapus catatan berdasarkan ID
  const deleteNote = (id) => {
    // Filter daftar catatan untuk menghapus catatan yang sesuai dengan ID
    const updatedNoteList = noteList.filter((note) => note.id !== id);
    // Perbarui state dengan daftar catatan yang sudah difilter
    setNoteList(updatedNoteList);
  };

  // Fungsi untuk mengedit catatan dalam daftar berdasarkan ID
  const editNote = (id, updatedTitle, updatedDesc) => {
    // Memperbarui catatan yang sesuai dalam daftar
    const updatedNotes = noteList.map((note) =>
      note.id === id
        ? { ...note, title: updatedTitle, desc: updatedDesc }
        : note
    );
    // Memperbarui state noteList dengan daftar catatan yang sudah diperbarui
    setNoteList(updatedNotes);
    // Kembali ke halaman utama setelah mengedit catatan
    setCurrentPage("home");
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage} // Halaman yang sedang aktif
      noteList={noteList} // Daftar catatan yang ada
      setCurrentPage={setCurrentPage} // Fungsi untuk mengubah halaman
      addNote={addNote} // Fungsi untuk menambahkan catatan
      deleteNote={deleteNote} // Fungsi untuk menghapus catatan
      editNote={editNote} // Fungsi untuk mengedit catatan
      editingNote={editingNote} // Catatan yang sedang diedit
      setEditingNote={setEditingNote} // Fungsi untuk menentukan catatan yang sedang diedit
      searchQuery={searchQuery} // Query pencarian
      setSearchQuery={setSearchQuery} // Fungsi untuk mengubah query pencarian
    />
  );
};

// Ekspor komponen App sebagai default export
export default App;
