export { CommonSplash } from './presentation/components/common-splash.component';

import { AppModule, ModalPresentationStyle, PresentationType } from "../../core";
import { SplashScreen } from "./presentation/splash.screen";

export const splashModule: AppModule = {
    navigation: {
        [SplashScreen.key]: {
            root: SplashScreen,
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
    }
};