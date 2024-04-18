import { useContainerInstance } from "./use-container-instance.di"
import { NavigationService } from "../services/navigation.service"
import { useCallback } from "react";
import { useNavigationContext } from "../context/navigation.context";

export const useAppNavigation = () => {
    const {componentId, params} = useNavigationContext();
    const navigationService = useContainerInstance(NavigationService);

    const navigate = useCallback((screen: string, params?: object) => {
        navigationService.navigate(componentId, screen, params);
    }, [componentId]);

    const goBack = useCallback((params?: object) => {
        navigationService.goBack(componentId, params);
    }, []);

    return {
        hideSplash: navigationService.hideSplash,
        params,
        navigate,
        goBack
    }
}