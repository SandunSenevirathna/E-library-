import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <ImageBackground
      source={require("../../assets/images/BG_01.png")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sign Up</Text>
        <Text style={styles.subtitleText}>
        Make Your Profile 
        </Text>
      </View>
      <View style={styles.loginArea}>

      <Text style={{ fontSize: 16, marginBottom: 10, fontWeight:'900' }}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Jhone Rown"
          onChangeText={(text) => setEmail(text)}
          value={name}
        />

        <Text style={{ fontSize: 16, marginBottom: 10, fontWeight:'900' }}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="abcd@gmail.com"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={{ fontSize: 16, marginBottom: 10, fontWeight:'900' }}>Password</Text>

        <TextInput
          style={styles.textInput}
          placeholder="•••••••••"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.centered}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.socialLogin}>
         <View style={styles.horizontalLine} />
        <Image
            source={{ uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000" }}
            style={{ width: 40, height: 40 }} // Adjust the width and height as needed
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 150, // Adjust spacing as needed
  },
  welcomeText: {
    fontFamily: "", // Specify your custom font family here if any
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    padding: 20,
  },
  loginArea: {
    flex: 1, // Set flex to 1 for full height
    width: "100%", // Set width to 100% for full width
    padding: 40,
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
  },
  loginButton: {
    backgroundColor: "#2F2F2F",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 10,
    textAlign: "center",
    color: "#000",
  },
  socialLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  centered: {
    alignItems: "center",
  },

  horizontalLine: {
    height: 1, // Adjust the height as needed
    width: "80%", // Adjust the width as needed
    backgroundColor: "black", // Adjust the color as needed
    marginBottom: 10, // Adjust the spacing between the line and the icon
  },
});
