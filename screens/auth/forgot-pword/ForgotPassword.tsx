import { StyleSheet, Text, View, Platform, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Button1 from "../../../components/Button1";
import FormErrorText from "../../../components/FormErrorText";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const URL = "https://api.igospel.com.ng/dev/auth/forgot_password/";

  const fieldsValidation = () => {
    let isEmailValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      isEmailValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid Email");
      isEmailValid = false;
    } else {
      setEmailError("");
    }

    const isValid = isEmailValid;

    return isValid;
  };

  const handleEmail = (text: string) => {
    setErrorMessage("");
    setEmail(text);
  };

  const formValues = {
    email,
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(URL, formValues);
      setLoading(false);
      setEmail("");
      navigation.navigate("verify-pword-code", email);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response.data.Error);
      console.log(error.response.data.Error);
    }
  };

  const handleSubmit = () => {
    if (fieldsValidation()) {
      setErrorMessage("");
      setLoading(true);
      handlePostRequest();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.wrapper}>
        {/* screen header section  */}
        <View style={styles.header}>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            size={24}
            color="white"
          />
          <Text style={styles.title}>Forgot Password</Text>
          <View></View>
        </View>

        {/* form section  */}
        <View style={styles.form}>
          <View style={styles.singleForm}>
            <Text style={styles.label}>Enter your Email</Text>
            <TextInput
              enterKeyHint="next"
              autoComplete="email"
              placeholder="olivia@gmail.com"
              style={styles.input}
              selectionColor={"white"}
              autoCapitalize="none"
              value={email}
              onChangeText={handleEmail}
            />
            <FormErrorText errorCondition={emailError} />
            <FormErrorText errorCondition={errorMessage} />
          </View>

          {/* submit button  */}
          <Button1
            onPress={handleSubmit}
            title="Continue"
            ready={true}
            loading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 14,
    marginTop: Platform.OS === "android" && 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontFamily: "sf-med",
    fontSize: 18,
  },
  form: {
    marginTop: 40,
  },
  label: {
    color: "white",
    fontFamily: "sf-med",
    fontSize: 16,
    marginBottom: 14,
  },
  input: {
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: 8,
    height: 55,
    width: "100%",
    color: "white",
    paddingLeft: 15,
    fontFamily: "sf-med",
    fontSize: 16,
  },
  singleForm: {
    marginBottom: 26,
  },
});
