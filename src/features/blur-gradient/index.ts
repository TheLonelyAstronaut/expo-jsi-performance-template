import { AppModule, PresentationType } from "../../core";
import { BlurGradientScreen } from "./presentation/blur-gradient.screen";

export const blurGradientModule: AppModule = {
    navigation: {
        [BlurGradientScreen.key]: {
            root: BlurGradientScreen,
            presentation: PresentationType.Screen,
            options: {
                topBar: {
                    title: {
                        text: 'Blur + Gradient'
                    },
                    backButton: {
                        showTitle: false
                    }
                }
            }
        }
    }
};