import { View, StyleSheet, Text } from "react-native";

export const BlurGradientScreen = () => {
    return (
        <View style={styles.container}>
            <Text>BlurGradinetScreen 321</Text>
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