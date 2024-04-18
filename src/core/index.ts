export { AppModule, AppNavigationModule, PresentationType, ModalPresentationStyle } from "./model/app-module.model";
export { withScreenNavigationBuilder } from './utils/hocs/with-screen-navigation-builder.hoc';
export { IoCContainer } from './utils/di/ioc-container.di';
export { useAppNavigation } from './utils/hooks/use-app-navigation.utils';
export { NavigationService } from './utils/services/navigation.service';

import { AppModule } from "./model/app-module.model";
import { coreContainerModule } from "./utils/di/container.di";

export const coreModule: AppModule = {
    navigation: [],
    di: coreContainerModule
};