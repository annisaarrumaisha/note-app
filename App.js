// Impor React dan hook useState dari library React untuk mengelola state komponen.
import React, { useState } from "react";

// Impor komponen layar utama dan layar lainnya.
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

// Komponen untuk menampilkan layar sesuai dengan halaman saat ini.
// Menerima props untuk menentukan halaman saat ini, daftar catatan, fungsi untuk mengubah halaman, dan fungsi untuk menambah catatan.
const CurrentPageWidget = ({
  currentPage, // Halaman saat ini yang sedang ditampilkan ('home', 'add', 'edit').
  noteList, // Daftar catatan yang ada.
  setCurrentPage, // Fungsi untuk mengubah halaman saat ini.
  addNote, // Fungsi untuk menambahkan catatan baru.
}) => {
  // Menggunakan switch case untuk menentukan komponen mana yang akan ditampilkan berdasarkan nilai currentPage.
  switch (currentPage) {
    case "home":
      // Menampilkan komponen Home dan meneruskan props yang diperlukan.
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      // Menampilkan komponen AddNote dan meneruskan fungsi addNote dan setCurrentPage sebagai props.
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      // Menampilkan komponen EditNote (belum ada fungsi yang dikaitkan).
      return <EditNote />;
    default:
      // Menampilkan komponen Home sebagai fallback jika currentPage tidak dikenal.
      return <Home />;
  }
};

const App = () => {
  // State untuk mengelola halaman saat ini. Defaultnya adalah 'home'.
  const [currentPage, setCurrentPage] = useState("home");

  // State untuk mengelola daftar catatan. Inisialisasi dengan satu catatan.
  const [noteList, setNoteList] = useState([
    {
      id: 1, // ID unik untuk setiap catatan.
      title: "Note pertama", // Judul catatan.
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry", // Deskripsi catatan.
    },
  ]);

  // Fungsi untuk menambahkan catatan baru ke dalam daftar.
  const addNote = (title, desc) => {
    // Menghasilkan ID baru untuk catatan berdasarkan ID catatan terakhir.
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    // Menambahkan catatan baru ke daftar dengan menggunakan nilai yang sudah ada dan nilai baru.
    setNoteList([
      ...noteList,
      {
        id, // ID unik untuk catatan baru.
        title: title, // Judul catatan baru.
        desc: desc, // Deskripsi catatan baru.
      },
    ]);
  };

  // Menampilkan CurrentPageWidget dengan meneruskan state dan fungsi yang diperlukan sebagai props.
  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
    />
  );
};

// Mengekspor komponen App sebagai default export dari file ini.
export default App;
