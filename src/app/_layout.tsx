import "../global.css";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";
import FlashMessage from "react-native-flash-message";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Provider store={store}>
      <FlashMessage
        position="top"
        textStyle={styles.toastText}
        titleStyle={styles.toastText}
      />
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(stacks)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  toastText: {
    textAlign: "center",
  }
})
