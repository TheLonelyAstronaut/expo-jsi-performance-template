import { AppModule, PresentationType, withScreenNavigationBuilder } from "@core";
import { EnterExitScreen } from "./presentation/enter-exit.screen";

export const enterExitModule: AppModule = {
    navigation: [
        {
            key: 'EnterExit',
            root: withScreenNavigationBuilder(EnterExitScreen),
            presentation: PresentationType.Screen,
            options: {
                topBar: {
                    title: {
                        text: 'Enter + Exit'
                    },
                    backButton: {
                        showTitle: false
                    }
                }
            }
        }
    ]
};