import "../global.css";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Layout() {
  return (
      <Provider store={store}>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(stacks)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
  );
}
