import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "@/assets/Colors/Colors";
import { useColorScheme } from "react-native";
import * as Local from "../utils/Constants";
import TiledView from "../components/TiledView";

export default function Tab() {
  const colorScheme = useColorScheme();
  const viewBackgroundColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;

  function renderFlatListItem(itemData) {
    return TiledView(itemData.item);
  }

  return (
    <View style={[styles.container, { backgroundColor: viewBackgroundColor }]}>
      <FlatList
        style={styles.list}
        data={Local.programmingLanguages}
        renderItem={renderFlatListItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        // numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {},
});
