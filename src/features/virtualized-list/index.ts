import { AppModule, PresentationType } from "../../core";
import { VirtualizedListScreen } from "./presentation/virtualized-list.screen";

export const virtualizedListModule: AppModule = {
    navigation: {
        [VirtualizedListScreen.key]: {
            root: VirtualizedListScreen,
            presentation: PresentationType.Screen,
            options: {
                topBar: {
                    title: {
                        text: 'Virtualized list'
                    },
                    backButton: {
                        showTitle: false
                    }
                }
            }
        }
    }
};