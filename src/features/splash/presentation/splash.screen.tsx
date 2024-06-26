import { useEffect } from "react";
import { CommonSplash } from "./components/common-splash.component";
import { useAppNavigation } from "@core";

export const SplashScreen = () => {
    const navigation = useAppNavigation();
    
    useEffect(() => {
        setTimeout(() => {        
            navigation.hideSplash();
        }, 500);
    }, []);

    return <CommonSplash/>
};