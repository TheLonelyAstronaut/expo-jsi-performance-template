import { View, StyleSheet, Text } from "react-native";

export const ImagesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Images</Text>
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