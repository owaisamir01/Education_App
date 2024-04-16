import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
   marginLeft:30
  },
});

export default Menu;
