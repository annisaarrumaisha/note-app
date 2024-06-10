// Impor React dan komponen dasar dari React Native.
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

// Impor komponen kustom untuk tombol dari folder components.
import CustomButton from "../components/customButton";

// Komponen NoteCard untuk menampilkan masing-masing catatan.
const NoteCard = ({ item }) => (
  <View style={styles.card}>
    {/* Menampilkan judul catatan */}
    <Text style={styles.cardTitle}>{item.title}</Text>
    {/* Menampilkan deskripsi catatan */}
    <Text>{item.desc}</Text>
    {/* Tombol untuk mengubah dan menghapus catatan */}
    <View style={styles.buttons}>
      {/* Tombol untuk mengubah catatan */}
      <CustomButton
        backgroundColor="#FFC300" // Warna latar belakang tombol ubah.
        color="#151D3B" // Warna teks tombol ubah.
        text="Ubah" // Teks yang ditampilkan pada tombol.
        fontSize={12} // Ukuran teks tombol.
        width={100} // Lebar tombol.
        onPress={() => {}} // Fungsi yang dipanggil saat tombol ditekan.
      />
      {/* Tombol untuk menghapus catatan */}
      <CustomButton
        backgroundColor="#D82148" // Warna latar belakang tombol hapus.
        color="#fff" // Warna teks tombol hapus.
        text="Hapus" // Teks yang ditampilkan pada tombol.
        fontSize={12} // Ukuran teks tombol.
        width={100} // Lebar tombol.
        onPress={() => {}} // Fungsi yang dipanggil saat tombol ditekan.
      />
    </View>
  </View>
);

// Komponen utama Home untuk menampilkan daftar catatan dan tombol untuk menambah catatan.
const Home = ({ noteList }) => (
  <View style={styles.container}>
    {/* Tombol untuk menambah catatan baru */}
    <CustomButton
      backgroundColor="#DDD" // Warna latar belakang tombol tambah.
      color="#203239" // Warna teks tombol tambah.
      text="Tambahkan Note" // Teks yang ditampilkan pada tombol.
      width="100%" // Lebar tombol.
      onPress={() => {}} // Fungsi yang dipanggil saat tombol ditekan.
    />
    {/* Daftar catatan yang ditampilkan menggunakan FlatList */}
    <FlatList
      showsVerticalScrollIndicator={false} // Hilangkan indikator gulir vertikal.
      data={noteList} // Sumber data untuk FlatList, diambil dari prop noteList.
      renderItem={NoteCard} // Fungsi yang digunakan untuk merender setiap item dalam daftar.
      keyExtractor={(item) => item.id.toString()} // Kunci unik untuk setiap item, diambil dari properti id dan diubah menjadi string.
    />
  </View>
);

// Gaya untuk komponen di dalam file ini.
const styles = StyleSheet.create({
  container: {
    display: "flex", // Gunakan flexbox untuk tata letak.
    flexDirection: "column", // Atur komponen anak secara vertikal.
    justifyContent: "center", // Pusatkan komponen anak secara vertikal.
    padding: 20, // Beri padding di sekitar container.
  },
  card: {
    padding: 10, // Beri padding di dalam card.
    marginVertical: 15, // Beri margin vertikal antara card.
    borderColor: "#DDD", // Warna batas card.
    borderWidth: 2, // Lebar batas card.
    borderRadius: 5, // Sudut card dibulatkan.
  },
  cardTitle: {
    fontWeight: "600", // Berat font untuk judul card.
    color: "#203239", // Warna teks untuk judul card.
    fontSize: 16, // Ukuran font untuk judul card.
    marginBottom: 5, // Jarak bawah antara judul dan teks lainnya.
  },
  buttons: {
    marginTop: 10, // Jarak atas antara teks card dan tombol.
    display: "flex", // Gunakan flexbox untuk tata letak tombol.
    flexDirection: "row", // Atur tombol secara horizontal.
    justifyContent: "space-evenly", // Atur jarak antar tombol secara merata.
  },
});

// Ekspor komponen Home sebagai default export dari file ini.
export default Home;
