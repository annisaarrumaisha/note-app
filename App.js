// Impor React dan hook useState dari library React.
import React, { useState } from "react";

// Impor komponen layar utama dan layar lainnya.
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

// Komponen untuk menampilkan halaman yang berbeda berdasarkan 'currentPage'
const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage }) => {
  // Tentukan halaman yang akan ditampilkan berdasarkan nilai 'currentPage'
  switch (currentPage) {
    case "home":
      // Tampilkan halaman utama (Home)
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      // Tampilkan halaman untuk menambahkan catatan baru (AddNote)
      return <AddNote />;
    case "edit":
      // Tampilkan halaman untuk mengubah catatan (EditNote)
      return <EditNote />;
    default:
      // Jika halaman tidak dikenali, kembali ke halaman utama (Home)
      return <Home />;
  }
};

// Komponen utama aplikasi
const App = () => {
  // Gunakan hook useState untuk mengelola halaman saat ini ('home', 'add', 'edit')
  const [currentPage, setCurrentPage] = useState("home");

  // Gunakan hook useState untuk menyimpan daftar catatan (noteList)
  const [noteList, setNoteList] = useState([
    {
      id: 1, // ID unik untuk setiap catatan
      title: "Note pertama", // Judul catatan
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry", // Deskripsi catatan
    },
  ]);

  // Render komponen berdasarkan halaman saat ini
  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    />
  );
};

// Ekspor komponen App sebagai default export dari file ini.
export default App;
