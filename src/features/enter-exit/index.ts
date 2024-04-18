import { AppModule, PresentationType } from "../../core";
import { EnterExitScreen } from "./presentation/enter-exit.screen";

export const enterExitModule: AppModule = {
    navigation: {
        [EnterExitScreen.key]: {
            root: EnterExitScreen,
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
    }
};