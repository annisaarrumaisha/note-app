import React from "react"; // Impor 'React' dari library React
import { TextInput, StyleSheet, View, Text } from "react-native"; // Impor komponen dasar dari React Native

// Komponen input teks kustom yang dapat digunakan untuk mengisi formulir
const CustomTextInput = ({
  label, // Label untuk input
  text, // Teks yang ditampilkan dalam input
  onChange, // Fungsi untuk mengubah teks
  placeholder, // Teks placeholder yang ditampilkan saat input kosong
  multiline, // Apakah input mendukung banyak baris
  numberOfLines, // Jumlah baris yang ditampilkan dalam input
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, { height: numberOfLines * 40 }]} // Terapkan gaya input dan tentukan tinggi berdasarkan jumlah baris
        value={text} // Set nilai input dengan teks dari props
        onChangeText={onChange} // Panggil fungsi onChange saat teks input berubah
        placeholder={placeholder} // Set placeholder input
        multiline={multiline} // Tentukan apakah input dapat menerima beberapa baris
        numberOfLines={numberOfLines} // Tentukan jumlah baris untuk input
      />
    </View>
  );
};

// Definisikan gaya untuk input dan label di dalamnya
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10, // Beri margin vertikal di sekitar input
  },
  label: {
    marginBottom: 5, // Beri margin bawah pada label
    fontSize: 14, // Set ukuran font untuk label
    color: "#203239", // Set warna teks untuk label
  },
  input: {
    borderWidth: 1, // Tambahkan garis batas pada input
    borderColor: "#ddd", // Warna garis batas input
    borderRadius: 5, // Tambahkan sudut membulat pada input
    padding: 10, // Beri padding dalam input untuk jarak antara teks dan garis batas
    fontSize: 16, // Set ukuran font untuk teks input
    textAlignVertical: "top", // Posisikan teks di bagian atas input saat multiline
  },
});

export default CustomTextInput; // Ekspor komponen CustomTextInput sebagai default export dari file ini
