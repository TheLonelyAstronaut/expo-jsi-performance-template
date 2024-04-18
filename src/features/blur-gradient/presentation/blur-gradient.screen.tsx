import { View, StyleSheet, Text } from "react-native";
import { withScreenNavigationBuilder } from "../../../core";

export const BlurGradientScreen = withScreenNavigationBuilder('BlurGradient', () => {
    return (
        <View style={styles.container}>
            <Text>BlurGradinetScreen</Text>
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