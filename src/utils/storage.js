// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.log("Error saving user data", e);
  }
};

export const getUser = async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    return userData != null ? JSON.parse(userData) : { name: "Guest" };
  } catch (e) {
    console.log("Error retrieving user data", e);
    return { name: "Guest" };
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (e) {
    console.log("Error logging out", e);
  }
};
