import { AppModule, PresentationType, withScreenNavigationBuilder } from "../../core";
import { ImagesScreen } from "./presentation/images.screen";

export const imagesModule: AppModule = {
    navigation: [
        {
            key: 'Images',
            root: withScreenNavigationBuilder(ImagesScreen),
            presentation: PresentationType.Screen,
            options: {
                topBar: {
                    title: {
                        text: 'Images'
                    },
                    backButton: {
                        showTitle: false
                    }
                }
            }
        }
    ]
};