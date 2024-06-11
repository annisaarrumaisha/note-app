import React from "react"; // Impor 'React' dari library React
import { TouchableOpacity, Text, StyleSheet } from "react-native"; // Impor komponen dasar dari React Native

// Komponen tombol kustom yang dapat digunakan untuk berbagai fungsi
const CustomButton = ({ backgroundColor, color, text, width, onPress }) => {
  // Mengembalikan tombol dengan gaya dan fungsi yang ditentukan
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width }]} // Terapkan gaya tombol dan tambahkan warna latar belakang serta lebar dari props
      onPress={onPress} // Panggil fungsi onPress saat tombol ditekan
    >
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Definisikan gaya untuk tombol dan teks di dalamnya
const styles = StyleSheet.create({
  button: {
    padding: 10, // Beri padding di sekitar teks tombol
    borderRadius: 5, // Tambahkan sudut membulat pada tombol
    alignItems: "center", // Pusatkan teks di dalam tombol secara horizontal
  },
  buttonText: {
    fontSize: 16, // Ukuran font untuk teks tombol
    fontWeight: "600", // Atur berat font menjadi semi-bold
  },
});

export default CustomButton; // Ekspor komponen CustomButton sebagai default export dari file ini
