import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Touchable, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Contact = ({navigation}) => {
 const [name,setName]=useState("");
 const [phone,setPhone]=useState("");
 const [mail,setMail]=useState("");
  
  
 function submit() {
  if (!name || !mail || !phone) { // change '&&' to '||'
    Alert.alert("Please fill all the fields");
  } else {
    navigation.navigate('Home'); // Fix typo in 'navigate'
  }
}

    return(
    <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
 <View>
  <Text style={styles.description} >You can reach us anytime via owais@gmail.com</Text>
</View>
<View style={styles.inputContainer}>
    <Text style={styles.labels} >Enter Your name</Text>
    <TextInput
    style={styles.inputStyle}
    placeholder='owais Amir'
    value={name}
    onChangeText={(name)=>setName(name)}
    />
</View>

<View style={styles.inputContainer}>
    <Text style={styles.labels}>Enter Your Email</Text>
    <TextInput
      style={styles.inputStyle}
    placeholder='sheikh001@gmail.com'
    value={mail}
    onChangeText={(mail)=>setMail(mail)}
    />
</View>


<View style={styles.inputContainer}>
    <Text style={styles.labels}>Enter Your Phone</Text>
    <TextInput
      style={styles.inputStyle}
    placeholder='0322-78868865'
    value={phone}
    onChangeText={(phone)=>setPhone(phone)}
    />
</View>

<TouchableOpacity
onPress={submit}
>
<Text style={styles.buttonStyle}>Contact Us</Text>
</TouchableOpacity>

</View>
  
 

  )
  
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    // fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
  //   fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    // fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "green",
    elevation: 3, // Optional: Add a slight shadow for depth
  },
  buttonText: {
    color: "#fff", // Change text color to white for better visibility
    textAlign: "center",
    fontSize: 18, // Adjust font size
    fontWeight: "bold", // Adjust font weight
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  //   fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
  //   fontFamily: "JosefinSans_300Light",
  },

})  
export default Contact;
