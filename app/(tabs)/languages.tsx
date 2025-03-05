import { View, StyleSheet, FlatList } from "react-native";
import { useColorScheme } from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";

import Colors from "@/assets/Colors/Colors";
import TiledView from "../components/TiledView";
import Data, { ProgrammingLanguage } from "../utils/Data";

export default function Tab() {
  const colorScheme = useColorScheme();
  const viewBackgroundColor =
    colorScheme === "light"
      ? Colors.light.secondaryBackground
      : Colors.dark.secondaryBackground;

  // Flatlist view reference
  const flatListRef = useRef<FlatList>(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: { item: ProgrammingLanguage }) => {
    return <TiledView content={item} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: viewBackgroundColor }]}>
      <FlatList
        ref={flatListRef}
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
});
