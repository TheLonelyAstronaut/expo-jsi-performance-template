import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ComponentBuilderWithNavigationInfo } from "../../model/app-module.model";
import { DIProvider } from "../context/di.context";
import { NavigationProvider } from "../context/navigation.context";
import { useIoCContainer } from "../hooks/use-ioc-container.utils";
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

export const withScreenNavigationBuilder = (name: string, Component: React.ComponentType): ComponentBuilderWithNavigationInfo => {
    const wrapped = () => ({componentId, ...rest}) => (
        <NavigationProvider componentId={componentId} params={rest}>
            <GestureHandlerRootView style={{flex: 1}}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <DIProvider>
                        <Component />
                    </DIProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </NavigationProvider>
    );
    
    (wrapped as ComponentBuilderWithNavigationInfo).key = name;

    return wrapped as ComponentBuilderWithNavigationInfo;
}