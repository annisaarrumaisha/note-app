// Impor React dari library React dan komponen dasar dari React Native
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Komponen CustomButton untuk membuat tombol kustom
const CustomButton = ({
  text, // Teks yang akan ditampilkan pada tombol
  onPress, // Fungsi yang akan dijalankan saat tombol ditekan
  backgroundColor = "#007BFF", // Warna latar belakang tombol (default: biru)
  color = "#FFFFFF", // Warna teks tombol (default: putih)
  fontSize = 14, // Ukuran teks tombol (default: 16)
  width = "100%", // Lebar tombol (default: 100% dari kontainer)
}) => {
  return (
    // TouchableOpacity digunakan untuk membuat tombol yang dapat ditekan
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width }]} // Gaya tombol, termasuk warna latar dan lebar
      onPress={onPress} // Fungsi yang dijalankan saat tombol ditekan
    >
      {/* Tampilkan teks pada tombol */}
      <Text style={[styles.buttonText, { color, fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Gaya untuk tombol dan teks tombol
const styles = StyleSheet.create({
  button: {
    padding: 10, // Padding dalam tombol
    borderRadius: 5, // Sudut tombol yang melengkung
    alignItems: "center", // Teks di tengah secara horizontal
    marginVertical: 5, // Margin vertikal antara tombol
  },
  buttonText: {
    fontWeight: "bold", // Teks dicetak tebal
  },
});

// Ekspor komponen CustomButton sebagai default export
export default CustomButton;
