import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {
    const { navigation } = props;
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <SafeAreaView>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Text>Settings Screen</Text>
            <Button onPress={() => goToPage("Home") } title="Ir a Home" />
        </SafeAreaView>
    )
}