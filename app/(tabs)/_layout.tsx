import { Tabs } from 'expo-router';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from '@/assets/Colors/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabBarIconColor = colorScheme === 'light' ? Colors.light.tabIconSelected : Colors.dark.tabIconSelected;
    const tabBarBackgroundColor = colorScheme === 'light' ? Colors.light.background : Colors.dark.background;

  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: tabBarIconColor,
        tabBarStyle:{backgroundColor: tabBarBackgroundColor},
        headerTintColor: tabBarIconColor,
        headerStyle:{backgroundColor: tabBarBackgroundColor}
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="languages"
        options={{
          title: 'Languages',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="CodeSandbox" color={color} />,
        }}
      />
    </Tabs>
  );
}