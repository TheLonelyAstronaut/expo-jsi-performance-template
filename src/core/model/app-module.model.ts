import { ContainerModule } from "inversify";
import { Options, OptionsModalPresentationStyle } from "react-native-navigation";


export enum PresentationType {
    Stack = 'stack',
    Screen = 'screen',
    Modal = 'modal',
    Root = 'root'
}

export {OptionsModalPresentationStyle as ModalPresentationStyle};

export type AppNavigationModule = {
    key: string;
    root: React.ComponentType;
    presentation: PresentationType;
    options: Options;
}

export type AppModule = {
    navigation: Array<AppNavigationModule>;
    di?: ContainerModule
}