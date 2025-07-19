import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { COLORS } from "../constants/colors";
import BiLogo from "../../assets/icons/LogoWhite.svg";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { storeUser } from "../utils/storage";
import { Button } from "../components/global";

const screenHeight = Dimensions.get("window").height;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleLogin = () => {
    if (email === "krishnajayanth24@gmail.com" && password === "Jayanth@1") {
      navigation.navigate("Dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://192.168.1.33:3000/api/v1/auth/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //           password: password,
  //           rememberMe: true,
  //         }),
  //       }
  //     );

  //     const json = await response.json();
  //     if (!response.ok) {
  //       console.error("🔴 Server returned error:", json);
  //       alert(json.message || "Login failed. Please try again.");
  //       return;
  //     }
  //     console.log("✅ Login successful:", json);
  //     console.log(json.user.name); // ✅ This will log "Mobikins"
  //     // ✅ Store user in AsyncStorage
  //     await storeUser(json.user); // You can store the full user object or just a token
  //     // Example: Navigate to Dashboard
  //     // navigation.navigate("Dashboard", { userName: json.user.name });
  //     navigation.navigate("Dashboard");
  //   } catch (error) {
  //     console.error("🛑 Network or parsing error:", error.message);
  //     alert(
  //       "Something went wrong. Please check your connection and try again."
  //     );
  //   }
  // };

  const getCookie = (name) => {
    const cookie = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith(name + "="));
    return cookie?.split("=")[1];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#55b56c", "#2a6f65", "#1f3d6d", "#163b7c"]}
        start={{ x: 0.5, y: 1.3 }}
        end={{ x: 0.3, y: 0.5 }}
        style={{
          height: screenHeight * 0.2,
          width: "100%",
          position: "absolute", // 🟢 Important
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.subContainer}
          keyboardShouldPersistTaps="handled"
        >
            <View style={styles.imageContainer}>
              <LinearGradient
                colors={["#163b7c", "#1f3d6d", "#2a6f65", "#55b56c"]}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 1.2, y: 0.2 }}
                style={styles.gradientBackground}
              >
                <BiLogo width={60} height={60} />
              </LinearGradient>
            </View>

            <View style={styles.TextContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.bestinfraText}>to Best Infra</Text>
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.LoginText}>
                Log in to access project dashboards. billing insights, and
                real-time infrastructure updates
              </Text>
              <Text style={styles.allText}>--all in one place</Text>
            </View>
            <LoginForm
              email={email}
              password={password}
              checked={checked}
              setEmail={setEmail}
              setPassword={setPassword}
              setChecked={setChecked}
              handleLogin={handleLogin}
              navigation={navigation}
            />
            <View style={{ backgroundColor: "#fff" }}>
              <View style={styles.straightLine}></View>
              <View style={styles.orContainer}>
                <Text style={styles.orText}>OR</Text>
              </View>
            </View>

            {/* <Pressable
              style={styles.guestContainer}
              onPress={() => navigation.navigate("GuestLogin")}
            >
              <Text style={styles.guestText}>Login as Guest</Text>
            </Pressable> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 80,
    width: "100%",
    zIndex: 9999999,
  },
  gradientBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f255e", // fallback bg for Android elevation
    ...Platform.select({
      ios: {
        shadowColor: COLORS.primaryFontColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  image: {
    width: 70,
    height: 70,
    zIndex: 1,
  },
  subContainer: {
    padding: 30,
  },
  TextContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  welcomeText: {
    color: COLORS.primaryFontColor,
    fontSize: 24,
    fontFamily: "Manrope-Bold",
  },
  bestinfraText: {
    color: COLORS.primaryFontColor,
    fontSize: 24,
    fontFamily: "Manrope-Bold",
  },
  LoginText: {
    color: COLORS.primaryFontColor,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Manrope-Regular",
  },
  allText: {
    color: COLORS.primaryFontColor,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Manrope-Regular",
  },

  orContainer: {
    backgroundColor: "#e9eaee",
    width: 32,
    height: 32,
    borderRadius: 35,
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 9,
    marginTop: -18,
  },
  straightLine: {
    width: "40%",
    backgroundColor: "#e9eaee",
    marginTop: 40,
    height: 2,
    alignSelf: "center",
  },
  orText: {
    color: COLORS.primaryFontColor,
    fontSize: Platform.OS === "ios" ? 14 : 12,
    textAlign: "center",
    verticalAlign: "middle",
    fontFamily: "Manrope-SemiBold",
  },
  guestContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  guestText: {
    color: COLORS.primaryFontColor,
    fontSize: 14,
    fontFamily: "Manrope-Medium",
  },
});
