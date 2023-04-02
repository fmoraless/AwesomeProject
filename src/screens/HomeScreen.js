import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;
    const goToPage = () => {
        navigation.navigate("Settings")
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Button onPress={goToPage} title="Ir a Settings" />
        </View>
    )
}