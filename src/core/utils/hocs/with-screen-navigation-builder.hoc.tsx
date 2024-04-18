import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DIProvider } from "../context/di.context";
import { NavigationProvider } from "../context/navigation.context";
import { useIoCContainer } from "../hooks/use-ioc-container.utils";
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { ThemeProvider } from "../context/theme.context";

export const withScreenNavigationBuilder = (Component: React.ComponentType): React.ComponentType<{ componentId: string }> => {
    return ({componentId, ...rest}) => (
        <NavigationProvider componentId={componentId} params={rest}>
            <GestureHandlerRootView style={{flex: 1}}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <DIProvider>
                        <ThemeProvider>
                            <Component />
                        </ThemeProvider>
                    </DIProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </NavigationProvider>
    );
}