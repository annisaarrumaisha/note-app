import React, { useState, useEffect } from "react"; // Mengimpor React, useState, dan useEffect dari React
import { View, StyleSheet, Text } from "react-native"; // Mengimpor komponen dasar dari React Native
import CustomButton from "../components/customButton"; // Mengimpor komponen CustomButton
import CustomTextInput from "../components/customTextInput"; // Mengimpor komponen CustomTextInput

// Komponen EditNote untuk mengubah catatan
const EditNote = ({ editingNote, setCurrentPage, editNote }) => {
  // State untuk menyimpan judul catatan yang sedang diedit
  const [title, setTitle] = useState(editingNote?.title || "");
  // State untuk menyimpan deskripsi catatan yang sedang diedit
  const [desc, setDesc] = useState(editingNote?.desc || "");

  useEffect(() => {
    // Mengisi state dengan data catatan yang sedang diedit saat komponen pertama kali di-render
    if (editingNote) {
      setTitle(editingNote.title);
      setDesc(editingNote.desc);
    }
  }, [editingNote]);

  // Fungsi untuk menyimpan perubahan yang telah dilakukan pada catatan
  const handleSave = () => {
    if (editingNote) {
      editNote(editingNote.id, title, desc); // Memanggil fungsi editNote untuk menyimpan perubahan
      setCurrentPage("home"); // Kembali ke halaman utama setelah menyimpan
    }
  };

  return (
    <View style={styles.container}>
      {/* Judul halaman edit note */}
      <Text style={styles.pageTitle}>Ubah Note</Text>

      {/* Input untuk mengubah judul catatan */}
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />

      {/* Input untuk mengubah deskripsi catatan */}
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />

      {/* Tombol untuk menyimpan perubahan */}
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={handleSave} // Simpan perubahan saat tombol diklik
        />
      </View>

      {/* Tombol untuk kembali ke halaman utama tanpa menyimpan perubahan */}
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")} // Kembali ke halaman utama saat tombol diklik
        />
      </View>
    </View>
  );
};

// Gaya (styles) untuk komponen-komponen di halaman EditNote
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote; // Ekspor komponen EditNote sebagai default export dari file ini
