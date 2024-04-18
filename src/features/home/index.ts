import { AppModule, NavigationService, PresentationType, withScreenNavigationBuilder } from "../../core";
import { HomeScreen } from "./presentation/home.screen";

export const homeModule: AppModule = {
    navigation: [
        {
            key: NavigationService.HOME_KEY,
            root: withScreenNavigationBuilder(HomeScreen),
            presentation: PresentationType.Root,
            options: {
                topBar: {
                    visible: false
                }
            }
        }
    ]
};