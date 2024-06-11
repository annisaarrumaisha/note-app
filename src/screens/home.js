// Impor React dan komponen dasar dari React Native.
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

// Impor komponen kustom untuk tombol dari folder components.
import CustomButton from "../components/customButton";

// Komponen NoteCard untuk menampilkan informasi catatan dan tombol aksi
const NoteCard = ({ item, setCurrentPage, deleteNote }) => (
  <View style={styles.card}>
    {/* Tampilkan judul catatan */}
    <Text style={styles.cardTitle}>{item.title}</Text>
    {/* Tampilkan deskripsi catatan */}
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      {/* Tombol untuk mengubah catatan */}
      <CustomButton
        backgroundColor="#FFC300" // Warna latar belakang tombol
        color="#151D3B" // Warna teks tombol
        text="Ubah" // Teks tombol
        fontSize={12} // Ukuran teks
        width={100} // Lebar tombol
        // Ubah halaman ke "edit" ketika tombol ditekan
        onPress={() => {
          setCurrentPage("edit");
        }}
      />
      {/* Tombol untuk menghapus catatan */}
      <CustomButton
        backgroundColor="#D82148" // Warna latar belakang tombol
        color="#fff" // Warna teks tombol
        text="Hapus" // Teks tombol
        fontSize={12} // Ukuran teks
        width={100} // Lebar tombol
        // Hapus catatan dengan ID yang diberikan ketika tombol ditekan
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
);

// Komponen Home untuk menampilkan daftar catatan
const Home = ({ noteList, setCurrentPage, deleteNote }) => (
  <View style={styles.container}>
    {/* Tombol untuk menambahkan catatan baru */}
    <CustomButton
      backgroundColor="#DDD" // Warna latar belakang tombol
      color="#203239" // Warna teks tombol
      text="Tambahkan Note" // Teks tombol
      width="100%" // Lebar tombol
      // Ubah halaman ke "add" ketika tombol ditekan
      onPress={() => {
        setCurrentPage("add");
      }}
    />
    {/* FlatList untuk menampilkan daftar catatan */}
    <FlatList
      showsVerticalScrollIndicator={false} // Sembunyikan indikator scroll vertikal
      data={noteList} // Data yang akan ditampilkan dalam FlatList
      // Render setiap item sebagai NoteCard dengan prop yang diperlukan
      renderItem={({ item }) => (
        <NoteCard
          item={item} // Data catatan
          setCurrentPage={setCurrentPage} // Fungsi untuk mengubah halaman
          deleteNote={deleteNote} // Fungsi untuk menghapus catatan
        />
      )}
      // Kunci unik untuk setiap item dalam daftar
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

// Gaya untuk komponen di dalam file ini.
const styles = StyleSheet.create({
  container: {
    display: "flex", // Gunakan flexbox untuk tata letak
    flexDirection: "column", // Atur komponen anak secara vertikal
    justifyContent: "center", // Pusatkan komponen anak secara vertikal
    padding: 20, // Beri padding di sekitar container
  },
  card: {
    padding: 10, // Beri padding di dalam card
    marginVertical: 15, // Beri margin vertikal antara card
    borderColor: "#DDD", // Warna batas card
    borderWidth: 2, // Lebar batas card
    borderRadius: 5, // Sudut card dibulatkan
  },
  cardTitle: {
    fontWeight: "600", // Berat font untuk judul card
    color: "#203239", // Warna teks untuk judul card
    fontSize: 16, // Ukuran font untuk judul card
    marginBottom: 5, // Jarak bawah antara judul dan teks lainnya
  },
  buttons: {
    marginTop: 10, // Jarak atas antara teks card dan tombol
    display: "flex", // Gunakan flexbox untuk tata letak tombol
    flexDirection: "row", // Atur tombol secara horizontal
    justifyContent: "space-evenly", // Atur jarak antar tombol secara merata
  },
});

// Ekspor komponen Home sebagai default export dari file ini.
export default Home;
