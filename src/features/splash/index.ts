export { CommonSplash } from './presentation/components/common-splash.component';

import { AppModule, ModalPresentationStyle, NavigationService, PresentationType, withScreenNavigationBuilder } from "@core";
import { SplashScreen } from "./presentation/splash.screen";

export const splashModule: AppModule = {
    navigation: [
        {
            key: NavigationService.SPLASH_KEY,
            root: withScreenNavigationBuilder(SplashScreen),
            presentation: PresentationType.Modal,
            options: {
                animations: {
                    showModal: {
                        enabled: false
                    }
                },
                modalPresentationStyle: ModalPresentationStyle.overFullScreen,
                topBar: {
                    visible: false
                }
            }
        }
    ]
};