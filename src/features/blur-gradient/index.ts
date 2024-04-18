import { AppModule, PresentationType, withScreenNavigationBuilder } from "@core";
import { BlurGradientScreen } from "./presentation/blur-gradient.screen";

export const blurGradientModule: AppModule = {
    navigation: [
        {
            key: 'BlurGradient',
            root: withScreenNavigationBuilder(BlurGradientScreen),
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
    ]
};