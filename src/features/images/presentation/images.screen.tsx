import { View, StyleSheet, Text } from "react-native";
import { withScreenNavigationBuilder } from "../../../core";

export const ImagesScreen = withScreenNavigationBuilder('Images', () => {
    return (
        <View style={styles.container}>
            <Text>Images</Text>
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