// Impor React dan komponen dasar dari React Native.
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

// Komponen SearchBar untuk menampilkan bilah pencarian
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    // View utama untuk SearchBar
    <View style={styles.container}>
      {/* Input untuk teks pencarian */}
      <TextInput
        placeholder="Cari catatan..." // Placeholder untuk input
        value={searchQuery} // Nilai saat ini dari teks pencarian
        onChangeText={setSearchQuery} // Fungsi untuk mengubah nilai teks pencarian
        style={styles.input} // Gaya untuk input
      />
    </View>
  );
};

// Gaya untuk SearchBar dan input
const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // Margin bawah untuk memberi jarak antara SearchBar dan konten di bawahnya
  },
  input: {
    backgroundColor: "#EDEDED", // Warna latar belakang input
    padding: 10, // Padding dalam input
    borderRadius: 8, // Sudut input yang melengkung
  },
});

// Ekspor komponen SearchBar sebagai default export
export default SearchBar;
