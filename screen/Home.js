import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home = () => {
  const desc =
    "In the heart of the bustling city, amidst the towering skyscrapers and busy streets, a quaint little cafe stood as an oasis of tranquility. The aroma of freshly brewed coffee wafted through the air, inviting passersby to step inside and escape the chaos outside. The soft hum of conversations and the clinking of cups created a comforting melody. Patrons sat ins .";
  
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.headerImage}
          source={require('./../assets/logo2.jpeg')} // Replace with the correct path to your image
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader, { fontSize: 33, color: '#4c5dab', marginTop: 0 }]}>
          Owais Technical
        </Text>
      </View>
      <View style={styles.icon}>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
    width: "100%",
    height: "100%"
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    marginTop: -50,
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 30, // Removed quotes
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    textAlign: "center",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 10,
    paddingBottom: 50,
    lineHeight: 26,
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },

  icon: {
    paddingTop: 60,
    marginBottom: -120,
    
  },
});

export default Home;
