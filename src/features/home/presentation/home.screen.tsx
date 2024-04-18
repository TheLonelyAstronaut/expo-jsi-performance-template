import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import R, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from "react";
import { useAppNavigation } from "../../../core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonSplash } from "../../splash";

export const HomeScreen = () => {
    const opacity = useSharedValue(1);
    const safe = useSafeAreaInsets();
    const navigation = useAppNavigation();

    const splashStyle = useAnimatedStyle(() => ({
        position: 'absolute',
        top: 0,
        opacity: opacity.value,
        width: '100%',
        height: '100%',        
    }));

    useEffect(() => {
        opacity.value = withTiming(0, {
            duration: 500
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: safe.top + 16, fontWeight: '600', marginBottom: 16, fontSize: 20 }}>Expo JSI Performace Template App 🚀</Text>
            <Text style={{ marginTop: 16, textAlign: 'center' }}>To compare performance with Bridge/Fabric, just change "newArchEnabled" prop in app.json!</Text>
            <ScrollView>
                <View style={{ marginTop: 16 }}>
                    <Button onPress={() => navigation.navigate('BlurGradient')} title={'Blur + Gradient'} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <Button onPress={() => navigation.navigate('EnterExit')} title={'Enter + Exit'} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <Button onPress={() => navigation.navigate('Images')} title={'Images'} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <Button onPress={() => navigation.navigate('VirtualizedList')} title={'Virtualized list'} />
                </View>
            </ScrollView>
            {/* Uncomment to get fade-out */}
            <R.View style={splashStyle}>
                <CommonSplash />
            </R.View>
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