import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function GetStart() {
  const navigation = useNavigation();

  const handleGetStart = () => {
   // navigation.navigate('/components/Login/Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/BG_01.png')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>E-Library</Text>
        <Text style={styles.subtitleText}>Your Gateway To Endless Learning Opportunities!</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStart}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // This will make the overlay fill the entire background
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
  },
  welcomeContainer: {
    alignItems: 'center', // Center the welcome text horizontally
    marginBottom: 300, // Add some space below the welcome text
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding a semi-transparent background
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#000', // Text color
  },
  welcomeText: {
    fontFamily: '', // Specify your custom font family here if any
    fontSize: 40,
    color: '#fff', // Text color
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#fff', // Text color
    textAlign: 'center',
    marginTop: 10,
    padding: 20,
  },
  button: {
    backgroundColor: '#46938F', // Button background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20, // Add some space below the welcome text
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Button text color
    fontWeight: 'bold',
  },
});
