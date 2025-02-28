import React from "react";
import { View } from "react-native";
import { useColorScheme } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '@/assets/Colors/Colors';

function ModeAwareView() {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'light' ? Colors.light.background : Colors.dark.background;
    return (
        <View style={backgroundColor}></View>
    );
};

export default ModeAwareView;