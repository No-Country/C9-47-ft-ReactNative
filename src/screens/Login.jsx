import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import DisplayContainer from "../components/DisplayContainer";
import { Formik } from "formik";
import * as yup from "yup";
import loginWithEmail from "../firebase/functions/loginWithEmailPassword";
import { useNavigation } from "@react-navigation/native";
import InputContainer from "../components/InputContainer";

const Login = () => {
  const navigation = useNavigation();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordLength = 6;

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Este campo es requerido")
      .matches(emailRegex, "Formato de correo inválido"),
    password: yup
      .string()
      .required("Este campo es requerido")
      .min(
        passwordLength,
        `Contraseña debe tener al menos ${passwordLength} caracteres`
      ),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={({ email, password }) => {
        loginWithEmail(email, password);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <DisplayContainer style={{marginHorizontal: 20}}>
          <Image
            style={styles.image}
            source={{
              uri: `https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/mathier190500002.jpg`,
            }}
          />
          <View>
            <Text style={styles.textDescription}>
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, est a, mattis tellus.
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Iniciar sesión</Text>
          </View>
          <View>
            <InputContainer
              placeholder="Correo"
              onChangeText={handleChange("email")}
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />
            <InputContainer
              secureTextEntry
              placeholder="Contraseña"
              onChangeText={handleChange("password")}
              value={values.password}
              touched={touched.password}
              error={errors.password}
            />
          </View>
          <View style={{ gap: 10 }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{ ...styles.text, color: "#666666" }}>
                iniciar sesión
              </Text>
            </TouchableOpacity>
            {/* <Text style={styles.textDescription}>O</Text>
        <TouchableOpacity style={styles.button} onPress={(e) => console.log(e)}>
          <Text style={{ ...styles.text, color: "#666666" }}>
            iniciar sesión con Google
          </Text>
        </TouchableOpacity> */}
          </View>
          <View>
            <Text style={styles.text}>
              ¿Aún no tienes una cuenta?
              <Text
                style={{ ...styles.text, ...styles.textButton }}
                onPress={() => navigation.navigate("Register")}
              >
                Crear cuenta
              </Text>
            </Text>
            <Text 
            style={{ ...styles.text, ...styles.textButton }}
            onPress={() => navigation.navigate("ResetPassword")}>
              ¿Has olvidado tu contraseña?
            </Text>
          </View>
        </DisplayContainer>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 79,
    height: 79,
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "semibold",
  },
  textDescription: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
  },
  button: {
    justifyContent: "center",
    width: 288,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
  },
  textButton: {
    color: "#0000ff",
    fontSize: 16,
    marginLeft: 8,
  }
});

export default Login;
