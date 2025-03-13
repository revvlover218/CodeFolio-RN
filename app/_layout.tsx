import { Stack } from "expo-router/stack";
import * as Notifications from "expo-notifications";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Layout() {
  const theme = useColorScheme();
  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
