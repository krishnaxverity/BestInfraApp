import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import Menu from "../../assets/icons/bars.svg";
import Notification from "../../assets/icons/notificationsWhite.svg";
import BiLogo from "../../assets/icons/LogoWhite.svg";
import HandBill from "../../assets/icons/handBill.svg";
import Calendar from "../../assets/icons/calendar.svg";
import CheapDollar from "../../assets/icons/cheapDollar.svg";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <StatusBar style="light" />
      <View style={styles.TopMenu}>
        <Pressable
          style={styles.barsIcon}
          onPress={() => navigation.navigate("SideMenu")}
        >
          <Menu width={18} height={18} fill="#202d59" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <BiLogo width={45} height={45} />
        </Pressable>
        <View style={styles.bellIcon}>
          <Notification width={18} height={18} fill="#ffffff" />
        </View>
      </View>
      <View style={{ padding: 20, paddingTop: 10 }}>
        <View style={styles.whiteBoxes}>
          <View>
            <Text style={styles.firstTitle}>Low Balance Alert</Text>
            <Text style={styles.description}>
              Your meter balance is below ₹100.
            </Text>
            <Text style={styles.description}>
              Recharge now to avoid disconnection.
            </Text>
          </View>
          <View style={styles.firstIconBox}>
            <CheapDollar width={14} height={14} />
          </View>
        </View>
        <View style={styles.whiteBoxes}>
          <View>
            <Text style={styles.secondTitle}>Upcoming Due Date</Text>
            <Text style={styles.description}>
              Your bill of ₹3,180 is due on 10 May.
            </Text>
            <Text style={styles.description}>Pay now to avoid late fees.</Text>
          </View>
          <View style={styles.secondIconBox}>
            <Calendar width={14} height={14} />
          </View>
        </View>
        <View style={styles.whiteBoxes}>
          <View>
            <Text style={styles.thirdTitle}>Payment Successful</Text>
            <Text style={styles.description}>₹3,180 received.</Text>
            <Text style={styles.description}>
              Thank you for stating current.
            </Text>
          </View>
          <View style={styles.thirdIconBox}>
            <HandBill width={14} height={14} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.primaryColor,
    height: "100%",
  },
  TopMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 75,
    paddingBottom: 15,
    paddingHorizontal: 30,
  },
  barsIcon: {
    backgroundColor: COLORS.secondaryFontColor,
    width: 54,
    height: 54,
    borderRadius: 60,
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    zIndex: 1,
  },
  bellIcon: {
    backgroundColor: COLORS.secondaryColor,
    width: 54,
    height: 54,
    borderRadius: 60,
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
  whiteBoxes: {
    backgroundColor: COLORS.secondaryFontColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  firstTitle: {
    color: COLORS.primaryColor,
    fontSize: 14,
    fontFamily: "Manrope-Bold",
  },
  secondTitle: {
    color: "#FF7C5C",
    fontSize: 14,
    fontFamily: "Manrope-Bold",
  },
  thirdTitle: {
    color: COLORS.secondaryColor,
    fontSize: 14,
    fontFamily: "Manrope-Bold",
  },
  description: {
    color: COLORS.primaryFontColor,
    fontSize: 12,
    fontFamily: "Manrope-Regular",
  },
  firstIconBox: {
    backgroundColor: "#E9EAEE",
    width: 30,
    height: 30,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondIconBox: {
    backgroundColor: "#FFF2EF",
    width: 30,
    height: 30,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  thirdIconBox: {
    backgroundColor: "#EEF8F0",
    width: 30,
    height: 30,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
