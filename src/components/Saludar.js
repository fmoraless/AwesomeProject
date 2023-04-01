import react from "react";
import { Text } from "react-native";

export default function Saludar(props) {
    const { firstname, lastname } = props;

    return (
        <Text>
            { firstname } { lastname }
        </Text>
    );
}

Saludar.defaultProps = {
    firstname: "Francisco", 
    lastname:  "Morales"
}