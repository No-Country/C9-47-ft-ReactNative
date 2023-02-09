import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const ChooseCountry = ({ navigation }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Te damos la bienvenida,</Text>
      <Text style={styles.requestText}>Introduce los siguientes datos:</Text>
      <TextInput
        style={styles.input}
        value={country}
        placeholder="País"
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Ciudad"
        onChangeText={(text) => setCity(text)}
      />
      <Button
        title="Siguiente"
        onPress={() => navigation.navigate("CompanyName", { country, city })}
        style={styles.nextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    padding: 32,
    backgroundColor: "#fff",
    marginTop: 80,
  },
  welcomeText: {
    fontSize: 22,
    marginBottom: 10,
  },
  requestText: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  nextButton: {
    marginTop: 80,
    width: "100%",
    borderRadius: 200,
  },
});

export default ChooseCountry;