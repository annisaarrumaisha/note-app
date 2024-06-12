// Impor React dan komponen dasar dari React Native.
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

// Impor komponen kustom untuk tombol dari folder components.
import CustomButton from "../components/customButton";
import SearchBar from "../components/searchBar"; // Impor komponen SearchBar

// Komponen NoteCard untuk menampilkan informasi catatan dan tombol aksi
const NoteCard = ({ item, setCurrentPage, deleteNote, setEditingNote }) => (
  // Setiap catatan ditampilkan dalam sebuah View dengan gaya 'card'
  <View style={styles.card}>
    {/* Tampilkan judul catatan */}
    <Text style={styles.cardTitle}>{item.title}</Text>
    {/* Tampilkan deskripsi catatan */}
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      {/* Tombol untuk mengubah catatan */}
      <CustomButton
        backgroundColor="#FFC300" // Warna latar belakang tombol
        color="#fff" // Warna teks tombol
        text="Ubah" // Teks tombol
        width={100} // Lebar tombol
        // Saat tombol "Ubah" diklik, setel catatan yang akan diedit dan alihkan ke halaman edit
        onPress={() => {
          setEditingNote(item);
          setCurrentPage("edit");
        }}
      />
      {/* Tombol untuk menghapus catatan */}
      <CustomButton
        backgroundColor="#D82148" // Warna latar belakang tombol
        color="#fff" // Warna teks tombol
        text="Hapus" // Teks tombol
        fontSize={14} // Ukuran teks
        width={100} // Lebar tombol
        // Hapus catatan dengan ID yang diberikan ketika tombol ditekan
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
);

// Komponen utama untuk halaman Home yang menampilkan daftar catatan
const Home = ({
  noteList,
  setCurrentPage,
  deleteNote,
  setEditingNote,
  searchQuery,
  setSearchQuery,
}) => {
  // Filter catatan berdasarkan query pencarian
  const filteredNotes = noteList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // View utama untuk halaman Home
    <View style={styles.container}>
      {/* Komponen pencarian */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Tombol untuk menambahkan catatan baru */}
      <CustomButton
        backgroundColor="#DDD" // Warna latar belakang tombol
        color="#203239" // Warna teks tombol
        text="Tambahkan Note" // Teks tombol
        fontSize={14} // Ukuran teks
        width="100%" // Lebar tombol
        // Ubah halaman ke "add" ketika tombol ditekan
        onPress={() => {
          setCurrentPage("add");
        }}
      />

      {/* FlatList untuk menampilkan daftar catatan */}
      <FlatList
        showsVerticalScrollIndicator={false} // Sembunyikan indikator scroll vertikal
        data={filteredNotes} // Data yang akan ditampilkan dalam FlatList
        // Render setiap item sebagai NoteCard dengan prop yang diperlukan
        renderItem={({ item }) => (
          <NoteCard
            item={item} // Data catatan
            setCurrentPage={setCurrentPage} // Fungsi untuk mengubah halaman
            deleteNote={deleteNote} // Fungsi untuk menghapus catatan
            setEditingNote={setEditingNote} // Fungsi untuk menentukan catatan yang sedang diedit
          />
        )}
        // Kunci unik untuk setiap item adalah ID catatan
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Gaya untuk halaman Home dan komponen NoteCard
const styles = StyleSheet.create({
  container: {
    flex: 1, // Komponen mengambil seluruh ruang yang tersedia
    padding: 16, // Jarak dari tepi kontainer
  },
  card: {
    backgroundColor: "#EDEDED", // Warna latar belakang kartu
    padding: 16, // Padding dalam kartu
    marginVertical: 8, // Margin vertikal antara kartu
    borderRadius: 8, // Sudut kartu yang melengkung
  },
  cardTitle: {
    fontWeight: "bold", // Teks judul dicetak tebal
    marginBottom: 8, // Jarak bawah antara judul dan deskripsi
  },
  buttons: {
    flexDirection: "row", // Tombol ditempatkan berdampingan secara horizontal
    justifyContent: "space-between", // Spasi di antara tombol
    marginTop: 16, // Jarak atas antara tombol dan deskripsi
  },
});

// Ekspor komponen Home sebagai default export
export default Home;
