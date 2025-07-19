import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { COLORS } from "../constants/colors";
import Tick from "../../assets/icons/tick.svg";
import { Button, Input } from "./global";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  checked,
  setChecked,
  handleLogin,
  navigation
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.inputBoxes}>
        <Input
          placeholder="Enter your UID"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          variant="default"
          size="medium"
          style={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          variant="default"
          size="medium"
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.forgetboxContainer}>
        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setChecked(!checked)}
        >
          <View style={[styles.checkbox, checked && styles.checked]}>
            {checked && <Tick width={14} height={14} />}
          </View>
          <Text style={styles.rememberText}>Remember</Text>
        </Pressable>
        <Button
          title="Forgot Password?"
          variant="ghost"
          size="small"
          onPress={() => navigation.navigate("ForgotPassword")}
          textStyle={styles.forgotText}
        />
      </View>
      <Button 
        title="Login Now" 
        variant="primary" 
        size="large"
        style={styles.loginButton} 
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    zIndex: 1,
  },
  inputBoxes: {
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  forgetboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    fontFamily: "Manrope-Medium",
  },
  rememberText: {
    color: COLORS.secondaryColor,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Manrope-Medium",
    marginLeft: 10,
  },
  forgotText: {
    color: COLORS.secondaryColor,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Manrope-Medium",
  },
  loginButton: {
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: COLORS.secondaryColor,
    borderColor: COLORS.secondaryColor,
  },
});
