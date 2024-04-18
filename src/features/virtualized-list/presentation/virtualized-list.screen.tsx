import { View, StyleSheet, Text } from "react-native";
import { withScreenNavigationBuilder } from "../../../core";

export const VirtualizedListScreen = withScreenNavigationBuilder('VirtualizedList', () => {
    return (
        <View style={styles.container}>
            <Text>VirtualizedList</Text>
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