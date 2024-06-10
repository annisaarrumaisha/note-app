// Impor 'React' dari library React dan komponen-komponen dasar dari React Native.
import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

// Definisikan komponen CustomTextInput yang menerima beberapa properti.
const CustomTextInput = ({
  text, // Teks default yang akan ditampilkan dalam input.
  onChange, // Fungsi yang dipanggil saat teks input berubah.
  label, // Label yang akan ditampilkan di atas input.
  multiline, // Apakah input ini dapat menerima beberapa baris teks.
  numberOfLines, // Jumlah baris default yang akan ditampilkan jika input multiline.
}) => {
  // Gaya untuk wrapper input, input itu sendiri, dan label.
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20, // Beri margin atas antara input dan elemen di atasnya.
    },
    input: {
      borderWidth: 2, // Tambahkan garis batas pada input.
      borderColor: "#DDD", // Warna garis batas input.
      padding: 10, // Beri padding dalam input untuk jarak antara teks dan garis batas.
    },
  });

  // Render wrapper input dengan label dan input teks di dalamnya.
  return (
    <View style={styles.textInputWrapper}>
      {/* Tampilkan label di atas input */}
      <Text>{label}</Text>
      {/* Tampilkan TextInput dengan properti yang ditentukan */}
      <TextInput
        multiline={multiline} // Tentukan apakah input dapat menerima beberapa baris.
        numberOfLines={numberOfLines} // Jumlah baris default yang ditampilkan.
        style={styles.input} // Gunakan gaya input yang telah ditentukan.
        placeholder={label} // Gunakan label sebagai placeholder di input.
        onChangeText={onChange} // Panggil fungsi onChange saat teks input berubah.
        defaultValue={text} // Set nilai default dari input.
      />
    </View>
  );
};

// Ekspor komponen CustomTextInput sebagai default export dari file ini.
export default CustomTextInput;
