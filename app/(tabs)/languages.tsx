import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "@/assets/Colors/Colors";
import { useColorScheme } from "react-native";
import * as Local from "../utils/Localize";
import TiledView, { ProgrammingLanguageProps } from "../components/TiledView";
import { Data, ProgrammingLanguage } from "../utils/Data";

export default function Tab() {
  const colorScheme = useColorScheme();
  const viewBackgroundColor =
    colorScheme === "light"
      ? Colors.light.secondaryBackground
      : Colors.dark.secondaryBackground;

  const renderItem = ({ item }: { item: ProgrammingLanguage }) => {
    return <TiledView content={item} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: viewBackgroundColor }]}>
      <FlatList
        style={styles.list}
        data={Data.programmingLanguages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ alignItems: "center" }}
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
