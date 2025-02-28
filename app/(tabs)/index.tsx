import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/assets/Colors/Colors';
import { useColorScheme } from 'react-native';

export default function Tab() {
    const colorScheme = useColorScheme();
    const viewBackgroundColor = colorScheme === 'light' ? Colors.light.background : Colors.dark.background;

  return (
    <View style={[styles.container, {backgroundColor: viewBackgroundColor}]}>
      <Text>Homes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});