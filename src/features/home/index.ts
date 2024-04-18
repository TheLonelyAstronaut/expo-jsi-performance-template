import { AppModule, PresentationType } from "../../core";
import { HomeScreen } from "./presentation/home.screen";

export const homeModule: AppModule = {
    navigation: {
        [HomeScreen.key]: {
            root: HomeScreen,
            presentation: PresentationType.Root,
            options: {
                topBar: {
                    title: {
                        text: 'Expo JSI Performace Template App 🚀'
                    }
                }
            }
        }
    }
};