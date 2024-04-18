import { View, StyleSheet, Text } from "react-native";

export const EnterExitScreen = () => {
    return (
        <View style={styles.container}>
            <Text>EnterExit</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});