import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;
    const goToPage = () => {
        navigation.navigate("Settings")
    }

    return (
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Button onPress={goToPage} title="Ir a Settings" />
        </SafeAreaView>
    )
}