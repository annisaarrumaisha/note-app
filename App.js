// Impor React dan hook useState dari library React.
import React, { useState } from "react";

// Impor komponen layar utama dan layar lainnya.
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

// Komponen ini menentukan layar yang akan ditampilkan berdasarkan state currentPage.
const CurrentPageWidget = ({
  currentPage, // Menyimpan halaman saat ini ('home', 'add', atau 'edit')
  noteList, // Daftar catatan yang ada
  setCurrentPage, // Fungsi untuk mengubah halaman saat ini
  addNote, // Fungsi untuk menambahkan catatan baru
  deleteNote, // Fungsi untuk menghapus catatan
}) => {
  switch (currentPage) {
    case "home":
      // Tampilkan layar utama (Home) dengan daftar catatan dan fungsi deleteNote
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote} // Menambahkan fungsi deleteNote sebagai prop
        />
      );
    case "add":
      // Tampilkan layar untuk menambahkan catatan baru (AddNote)
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      // Tampilkan layar untuk mengedit catatan (EditNote)
      return <EditNote />;
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

  return (
    <CurrentPageWidget
      currentPage={currentPage} // Halaman yang sedang aktif
      noteList={noteList} // Daftar catatan yang ada
      setCurrentPage={setCurrentPage} // Fungsi untuk mengubah halaman
      addNote={addNote} // Fungsi untuk menambahkan catatan
      deleteNote={deleteNote} // Fungsi untuk menghapus catatan
    />
  );
};

// Ekspor komponen App sebagai default export
export default App;
