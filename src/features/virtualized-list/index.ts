import { AppModule, PresentationType, withScreenNavigationBuilder } from "@core";
import { VirtualizedListScreen } from "./presentation/virtualized-list.screen";

export const virtualizedListModule: AppModule = {
    navigation: [
        {
            key: 'VirtualizedList',
            root: withScreenNavigationBuilder(VirtualizedListScreen),
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
    ]
};