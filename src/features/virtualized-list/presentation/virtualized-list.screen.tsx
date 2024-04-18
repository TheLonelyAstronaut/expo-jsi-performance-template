import { View, StyleSheet, Text } from "react-native";

export const VirtualizedListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>VirtualizedList 123</Text>
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