// Impor React dan hook useState dari library React.
import React, { useState } from "react";
// Impor komponen-komponen dasar dari React Native.
import { View, StyleSheet, Text } from "react-native";
// Impor komponen kustom untuk tombol dan input teks.
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

// Komponen AddNote menerima dua props:
// 1. setCurrentPage - fungsi untuk mengubah halaman saat ini.
// 2. addNote - fungsi untuk menambahkan catatan baru ke dalam daftar.
const AddNote = ({ setCurrentPage, addNote }) => {
  // State untuk menyimpan nilai input judul dan deskripsi yang diisi oleh pengguna.
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    // Container utama yang mengatur layout komponen anak.
    <View style={styles.container}>
      {/* Teks judul halaman "Tambahkan Note" */}
      <Text style={styles.pageTitle}>Tambahkan Note</Text>

      {/* Komponen input teks untuk judul catatan */}
      <CustomTextInput
        text={title} // Nilai dari input teks untuk judul.
        onChange={setTitle} // Fungsi untuk mengubah state judul ketika teks berubah.
        label="Judul" // Label yang ditampilkan di atas input teks.
        placeholder="Judul" // Placeholder untuk input teks.
        numberOfLines={1} // Jumlah baris input (1 baris).
        multiline={false} // Input teks tidak mendukung beberapa baris.
      />

      {/* Komponen input teks untuk deskripsi catatan */}
      <CustomTextInput
        text={desc} // Nilai dari input teks untuk deskripsi.
        onChange={setDesc} // Fungsi untuk mengubah state deskripsi ketika teks berubah.
        label="Deskripsi" // Label yang ditampilkan di atas input teks.
        placeholder="Deskripsi" // Placeholder untuk input teks.
        multiline // Input teks mendukung beberapa baris.
        numberOfLines={4} // Jumlah baris input (4 baris).
      />

      {/* Tombol "Simpan" untuk menambahkan catatan */}
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881" // Warna latar belakang tombol.
          color="#fff" // Warna teks tombol.
          text="Simpan" // Teks yang ditampilkan di tombol.
          width="100%" // Lebar tombol.
          // Ketika tombol ditekan, jalankan fungsi addNote dan kembali ke halaman home.
          onPress={() => {
            addNote(title, desc); // Panggil fungsi addNote dengan judul dan deskripsi yang diberikan.
            setCurrentPage("home"); // Ubah halaman saat ini menjadi "home".
          }}
        />
      </View>

      {/* Tombol "Kembali ke Home" untuk kembali ke halaman utama */}
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD" // Warna latar belakang tombol.
          color="#203239" // Warna teks tombol.
          text="Kembali ke Home" // Teks yang ditampilkan di tombol.
          width="100%" // Lebar tombol.
          // Ketika tombol ditekan, ubah halaman saat ini menjadi "home".
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

// Gaya untuk komponen di dalam file ini.
const styles = StyleSheet.create({
  container: {
    display: "flex", // Gunakan flexbox untuk tata letak.
    flexDirection: "column", // Atur komponen anak secara vertikal.
    justifyContent: "center", // Pusatkan komponen anak secara vertikal.
    padding: 20, // Beri padding di sekitar container.
  },
  pageTitle: {
    marginTop: 20, // Jarak atas antara tepi container dan teks judul.
    fontSize: 20, // Ukuran font untuk teks judul.
    fontWeight: "700", // Berat font untuk teks judul.
    textAlign: "center", // Posisikan teks judul di tengah secara horizontal.
    color: "#203239", // Warna teks untuk teks judul.
  },
  spacerTop: {
    marginTop: 30, // Jarak atas antara elemen di atas dan elemen ini.
  },
});

// Ekspor komponen AddNote sebagai default export dari file ini.
export default AddNote;
