import { View, StyleSheet, Text } from "react-native";
import { withScreenNavigationBuilder } from "../../../core";

export const EnterExitScreen = withScreenNavigationBuilder('EnterExit', () => {
    return (
        <View style={styles.container}>
            <Text>EnterExit</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});