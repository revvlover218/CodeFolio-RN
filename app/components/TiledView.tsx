import { View, Text, StyleSheet, useColorScheme } from "react-native";
import HeadingView from "./HeadingView";
import { IconLibrary, ProgrammingLanguage } from "../utils/Data";
import React from "react";
import { Colors } from "@/assets/Colors/Colors";
import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export interface ProgrammingLanguageProps {
  content: ProgrammingLanguage;
}

interface IconProps {
  icon: string;
  library: string;
  color: string;
}

const IconImageView: React.FC<IconProps> = ({ icon, library, color }) => {
  let iconSize = 40;
  switch (library) {
    case IconLibrary.entypo:
      if (icon === "old-mobile") {
        return <Entypo name="old-mobile" size={iconSize} color={color} />;
      }
    case IconLibrary.fontAwesome:
      if (icon === "free-code-camp") {
        return (
          <FontAwesome name="free-code-camp" size={iconSize} color={color} />
        );
      }
    case IconLibrary.fontAwesome6:
      if (icon === "square-js") {
        return <FontAwesome6 name="square-js" size={iconSize} color={color} />;
      } else if (icon === "html5") {
        return <FontAwesome6 name="html5" size={iconSize} color={color} />;
      } else if (icon === "css3") {
        return <FontAwesome6 name="css3" size={iconSize} color={color} />;
      } else if (icon === "python") {
        return <FontAwesome6 name="python" size={iconSize} color={color} />;
      } else if (icon === "digital-ocean") {
        return (
          <FontAwesome6 name="digital-ocean" size={iconSize} color={color} />
        );
      } else if (icon === "database") {
        return <FontAwesome6 name="database" size={iconSize} color={color} />;
      } else if (icon === "php") {
        return <FontAwesome6 name="php" size={iconSize} color={color} />;
      } else if (icon === "microchip") {
        return <FontAwesome6 name="microchip" size={iconSize} color={color} />;
      } else if (icon === "java") {
        return <FontAwesome6 name="java" size={iconSize} color={color} />;
      }
    case IconLibrary.fontisto:
      if (icon === "swift") {
        return <Fontisto name="swift" size={iconSize} color={color} />;
      } else if (icon === "mysql") {
        return <Fontisto name="mysql" size={iconSize} color={color} />;
      }
    case IconLibrary.foundation:
      break;
    case IconLibrary.ionicons:
      if (icon === "game-controller-outline") {
        return (
          <Ionicons
            name="game-controller-outline"
            size={iconSize}
            color={color}
          />
        );
      }
    case IconLibrary.materialCommunityIcons:
      if (icon === "language-typescript") {
        return (
          <MaterialCommunityIcons
            name="language-typescript"
            size={iconSize}
            color={color}
          />
        );
      } else if (icon === "state-machine") {
        return (
          <MaterialCommunityIcons
            name="state-machine"
            size={iconSize}
            color={color}
          />
        );
      } else if (icon === "code-array") {
        return (
          <MaterialCommunityIcons
            name="code-array"
            size={iconSize}
            color={color}
          />
        );
      } else if (icon === "math-integral") {
        return (
          <MaterialCommunityIcons
            name="math-integral"
            size={iconSize}
            color={color}
          />
        );
      } else if (icon === "microsoft-visual-studio-code") {
        return (
          <MaterialCommunityIcons
            name="microsoft-visual-studio-code"
            size={iconSize}
            color={color}
          />
        );
      }
    default:
      return <View></View>;
  }
};

const TiledView: React.FC<ProgrammingLanguageProps> = ({ content }) => {
  const colorScheme = useColorScheme();
  const backgroundColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;
  const iconBackgroundColor =
    colorScheme === "light"
      ? Colors.light.secondaryBackground
      : Colors.dark.secondaryBackground;
  const iconColor =
    colorScheme === "light" ? Colors.light.icon : Colors.dark.icon;

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View
        style={[
          styles.roundedIconContainer,
          { backgroundColor: iconBackgroundColor },
        ]}
      >
        <IconImageView
          icon={content.icon}
          library={content.library}
          color={iconColor}
        />
      </View>
      <View style={styles.textContainer}>
        <HeadingView text={content.name}></HeadingView>
      </View>
    </View>
  );
};

export default TiledView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    // marginHorizontal: 10,
    borderRadius: 10,
    minWidth: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  roundedIconContainer: {
    width: 75,
    height: 75,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
