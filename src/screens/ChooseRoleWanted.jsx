import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const RoleWantedScreen = ({ navigation }) => {
  const [role, setRole] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>¿Qué perfil buscas?</Text>
      <Text style={styles.requestText}>
        Por favor, introduce el rol deseado:
      </Text>
      <TextInput
        style={styles.input}
        value={role}
        placeholder="Perfil"
        onChangeText={(text) => setRole(text)}
      />

      <Button
        title="Siguiente"
        // TODO: Uncomment this line and pass the role to the next screen WHICH IS?
        // onPress={() => navigation.navigate("Email", { role })}
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
  questionText: {
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

export default RoleWantedScreen;