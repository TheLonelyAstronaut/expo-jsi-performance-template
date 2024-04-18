import { IoCContainer, coreModule } from "../core";
import { splashModule } from "../features/splash";
import { NavigationService } from "../core/utils/services/navigation.service";
import { homeModule } from "../features/home";
import { blurGradientModule } from "../features/blur-gradient";
import { enterExitModule } from "../features/enter-exit";
import { imagesModule } from "../features/images";
import { virtualizedListModule } from "../features/virtualized-list";

export const bootstrap = () => {
    const appModules = [
        coreModule,
        splashModule,
        homeModule,
        blurGradientModule,
        enterExitModule,
        imagesModule,
        virtualizedListModule
    ];

    IoCContainer.initializeWithModules(appModules);

    const navigationService = IoCContainer.instance.container.get(NavigationService);

    navigationService.initAppWithModules(appModules);
    navigationService.hideSplash();
}