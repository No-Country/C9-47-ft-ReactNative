import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import DisplayContainer from "../components/DisplayContainer";

const ChooseUserType = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <DisplayContainer>
      <Text style={styles.title}>Elige un modo para empezar:</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionBox}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>En busca de empleo</Text>
            <RadioButton
              value="worker"
              status={selectedValue === "worker" ? "checked" : "unchecked"}
              onPress={() => setSelectedValue("worker")}
            />
          </View>
        </View>
        <View style={styles.optionBox}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Buscando personal</Text>
            <RadioButton
              value="employer"
              status={selectedValue === "employer" ? "checked" : "unchecked"}
              onPress={() => setSelectedValue("employer")}
            />
          </View>
        </View>
        <View style={styles.optionBox}>
          <View style={styles.radioContainer}>
            <Text style={styles.radioText}>Abierto a crecer</Text>
            <RadioButton
              value="open to grow"
              status={
                selectedValue === "open to grow" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedValue("open to grow")}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Country", { ChooseUserType: selectedValue });
        }}
        disabled={!selectedValue}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </DisplayContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  optionBox: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  radioContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioText: {
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
    width: 288,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    marginTop: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});

export default ChooseUserType;