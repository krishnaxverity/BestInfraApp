import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button, Input } from "./global";

const screenHeight = Dimensions.get("window").height;

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        alert("Please enter your email");
        return;
      }

      const response = await fetch(
        "http://192.168.1.33:3000/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.status === "success") {
        alert("If this email exists, you will receive reset instructions.");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Network or server error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <Input
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          variant="default"
          size="medium"
          style={styles.inputContainer}
        />
        <Button
          title="Send Reset Link"
          onPress={handleForgotPassword}
          variant="primary"
          size="large"
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  Maincontainer: {
    height:"100%",
    display:"flex",
    justifyContent:"center",
  },
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
