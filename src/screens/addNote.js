// Impor React dan hook useState dari library React.
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// Impor komponen kustom untuk tombol dari folder components.
import CustomButton from "../components/customButton";

// Komponen utama untuk halaman AddNote yang memungkinkan pengguna menambahkan catatan baru
const AddNote = ({ setCurrentPage, addNote }) => {
  // State untuk menyimpan judul dan deskripsi catatan yang akan ditambahkan
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    // KeyboardAvoidingView untuk memastikan keyboard tidak menutupi input saat muncul
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* ScrollView untuk memungkinkan scroll jika konten sangat panjang */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Input untuk judul catatan */}
        <TextInput
          placeholder="Masukkan Judul" // Placeholder untuk input
          value={title} // Nilai saat ini dari judul
          onChangeText={setTitle} // Fungsi untuk mengubah nilai judul
          style={styles.input} // Gaya untuk input
        />
        {/* Input untuk deskripsi catatan */}
        <TextInput
          placeholder="Masukkan Deskripsi" // Placeholder untuk input
          value={desc} // Nilai saat ini dari deskripsi
          onChangeText={setDesc} // Fungsi untuk mengubah nilai deskripsi
          style={styles.textArea} // Gaya untuk input dengan tinggi khusus
          multiline // Izinkan input multi-baris
        />
      </ScrollView>
      {/* View untuk tombol yang tetap berada di bagian bawah */}
      <View style={styles.buttonContainer}>
        {/* Tombol untuk menambahkan catatan baru */}
        <CustomButton
          text="Simpan" // Teks tombol
          onPress={() => {
            addNote(title, desc); // Tambahkan catatan dengan judul dan deskripsi saat ini
            setCurrentPage("home"); // Kembali ke halaman utama setelah menambahkan catatan
          }}
        />
        {/* Tombol untuk membatalkan dan kembali ke halaman utama */}
        <CustomButton
          text="Batal" // Teks tombol
          onPress={() => setCurrentPage("home")} // Kembali ke halaman utama saat tombol ditekan
          backgroundColor="#D82148" // Warna latar belakang tombol
        />
      </View>
    </KeyboardAvoidingView>
  );
};

// Gaya untuk halaman AddNote dan komponen input
const styles = StyleSheet.create({
  container: {
    flex: 1, // Komponen mengambil seluruh ruang yang tersedia
    padding: 16, // Jarak dari tepi kontainer
  },
  scrollContainer: {
    flexGrow: 1, // Membuat ScrollView mengambil ruang yang tersedia
    justifyContent: "center", // Menempatkan konten di tengah secara vertikal
  },
  input: {
    backgroundColor: "#EDEDED", // Warna latar belakang input
    padding: 16, // Padding dalam input
    marginBottom: 16, // Margin bawah antara input
    borderRadius: 8, // Sudut input yang melengkung
  },
  textArea: {
    backgroundColor: "#EDEDED", // Warna latar belakang input
    padding: 16, // Padding dalam input
    borderRadius: 8, // Sudut input yang melengkung
    flex: 1, // Membuat TextInput mengambil ruang yang tersisa
    textAlignVertical: "top", // Mengatur teks berada di atas
  },
  buttonContainer: {
    marginTop: 16, // Margin atas antara tombol dan input
  },
});

// Ekspor komponen AddNote sebagai default export
export default AddNote;
