// Impor 'React' dari library React dan komponen-komponen dasar dari React Native.
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Definisikan komponen CustomButton yang menerima beberapa properti.
const CustomButton = ({
  backgroundColor, // Warna latar belakang tombol.
  color, // Warna teks tombol.
  text, // Teks yang akan ditampilkan di tombol.
  onPress, // Fungsi yang dipanggil saat tombol ditekan.
  fontSize = 16, // Ukuran font untuk teks tombol, default 16.
  width = 120, // Lebar tombol, default 120.
}) => {
  // Gaya untuk tombol dan teks di dalamnya.
  const styles = StyleSheet.create({
    button: {
      alignItems: "center", // Pusatkan teks di dalam tombol secara horizontal.
      backgroundColor, // Gunakan warna latar belakang yang diberikan melalui props.
      width, // Gunakan lebar yang diberikan melalui props.
      padding: 10, // Beri padding di sekitar teks tombol.
    },
    buttonText: {
      fontSize, // Gunakan ukuran font yang diberikan melalui props.
      fontWeight: "700", // Atur berat font menjadi tebal (bold).
      color, // Gunakan warna teks yang diberikan melalui props.
    },
  });

  // Render tombol dengan TouchableOpacity dan teks di dalamnya.
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Ekspor komponen CustomButton sebagai default export dari file ini.
export default CustomButton;
