import react from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    const { firstname, lastname } = props;

    return (
        <Text>
            { firstname } { lastname }
        </Text>
    );
}

/* Saludar.defaultProps = {
    firstname: "Francisco", 
    lastname:  "Morales"
} */

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
};
