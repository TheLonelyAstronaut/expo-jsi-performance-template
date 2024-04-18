import { useEffect } from "react";
import { View , Text, StyleSheet} from "react-native";
import { CommonSplash } from "./components/common-splash.component";
import { useAppNavigation, withScreenNavigationBuilder, NavigationService } from "../../../core";

export const SplashScreen = withScreenNavigationBuilder(NavigationService.SPLASH_KEY, () => {
    const navigation = useAppNavigation();
    
    useEffect(() => {
        setTimeout(() => {        
            navigation.hideSplash();
        }, 500);
    }, []);

    return <CommonSplash/>
});