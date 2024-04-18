import { ContainerModule } from "inversify";
import React from "react";
import { Options, OptionsModalPresentationStyle } from "react-native-navigation";

export type ComponentBuilderWithNavigationInfo = (() => React.ComponentType) & {
    key: string;
}

export enum PresentationType {
    Stack = 'stack',
    Screen = 'screen',
    Modal = 'modal',
    Root = 'root'
}

export {OptionsModalPresentationStyle as ModalPresentationStyle};

export type AppNavigationModule = {
    root: ComponentBuilderWithNavigationInfo;
    presentation: PresentationType;
    options: Options;
}

export type AppModule = {
    keys?: Record<string, string>;
    navigation: Record<string, AppNavigationModule>;
    di?: ContainerModule
}