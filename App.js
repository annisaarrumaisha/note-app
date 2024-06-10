// Impor React dan hook useState dari library React.
import React, { useState } from "react";

// Impor komponen layar utama (Home) dari folder screens.
import Home from "./src/screens/home";

// Fungsi utama dari aplikasi kita.
const App = () => {
  // Gunakan hook useState untuk menyimpan daftar catatan (noteList).
  const [noteList, setNoteList] = useState([
    {
      id: 1, // ID unik untuk setiap catatan.
      title: "Note pertama", // Judul catatan.
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", // Deskripsi catatan.
    },
  ]);

  // Render komponen Home dengan mengirimkan noteList sebagai properti.
  return <Home noteList={noteList} />;
};

// Ekspor komponen App sebagai default export dari file ini.
export default App;
