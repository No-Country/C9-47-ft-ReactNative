import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RegisterProgressBar from "../components/RegisterProgressBar";
import { useNavigation } from "@react-navigation/native";
import WomanManChat from "../svgs/WomaManChat";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.omitirButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.omitirText}>Omitir</Text>
        </TouchableOpacity>
        <WomanManChat style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Inicia una conversación</Text>
          <Text style={styles.subtitle}>
            Da el primer paso y conversa con aquellas personas que estan en la
            bandeja de mensajes.
          </Text>
        </View>
        <View style={styles.progressContainer}>
          <RegisterProgressBar currentStep={3} numSteps={4} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding4")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    position: "relative",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  omitirButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  omitirText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#84FFFF",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: "#525252",
    fontWeight: "500",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#525252",
    fontWeight: "500",
  },
  progressContainer: {
    width: "100%",
    marginBottom: 40,
  },
  button: {
    width: 280,
    height: 38,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#091D5C",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#091D5C",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Onboarding3;