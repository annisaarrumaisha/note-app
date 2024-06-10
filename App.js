// Impor 'React' dari library React dan komponen-komponen dasar dari React Native.
import React from "react";
import { View, StyleSheet } from "react-native";

// Impor komponen kustom yang telah dibuat: CustomButton dan CustomTextInput.
import CustomButton from "./src/components/customButton";
import CustomTextInput from "./src/components/customTextInput";

// Fungsi utama aplikasi kita, 'App'.
const App = () => (
  // Gunakan View sebagai container utama dengan gaya yang telah ditentukan.
  <View style={styles.container}>
    {/* Komponen CustomButton untuk menampilkan tombol dengan gaya kustom */}
    <CustomButton
      backgroundColor="#DDDDDD" // Warna latar belakang tombol.
      color="#39494F" // Warna teks tombol.
      text="Custom Button" // Teks yang ditampilkan di tombol.
      width="100%" // Lebar tombol.
      onPress={() => {}} // Fungsi yang dipanggil saat tombol ditekan.
    />
    {/* Komponen CustomTextInput untuk menampilkan input teks dengan gaya kustom */}
    <CustomTextInput
      label="Custom Text" // Label yang ditampilkan di atas input.
      multiline // Aktifkan input multiline.
      numberOfLines={2} // Jumlah baris default yang ditampilkan.
      onChange={() => {}} // Fungsi yang dipanggil saat teks input berubah.
    />
  </View>
);

// Gaya untuk komponen utama.
const styles = StyleSheet.create({
  container: {
    display: "flex", // Gunakan flexbox untuk layout.
    flexDirection: "column", // Atur komponen anak secara vertikal.
    justifyContent: "center", // Pusatkan komponen anak secara vertikal.
    padding: 40, // Beri padding di sekitar container.
  },
});

// Ekspor komponen 'App' sebagai default export dari file ini.
export default App;
