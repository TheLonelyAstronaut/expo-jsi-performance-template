import { AppModule, PresentationType } from "../../core";
import { ImagesScreen } from "./presentation/images.screen";

export const imagesModule: AppModule = {
    navigation: {
        [ImagesScreen.key]: {
            root: ImagesScreen,
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
    }
};