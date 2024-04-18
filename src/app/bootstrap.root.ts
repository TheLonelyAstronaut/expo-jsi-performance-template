import { IoCContainer, coreModule, NavigationService } from "@core";
import { splashModule } from "@features/splash";
import { homeModule } from "@features/home";
import { blurGradientModule } from "@features/blur-gradient";
import { enterExitModule } from "@features/enter-exit";
import { imagesModule } from "@features/images";
import { virtualizedListModule } from "@features/virtualized-list";
import { Appearance } from "react-native";
import { GuidelinesContainer, ThemeListener } from "../core/utils/styles/guidelines-container.styles";
import { Themes } from "../core/utils/styles/themes.styles";

export const bootstrap = async () => {
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
    
    GuidelinesContainer.initializeWithSystemThemeListener((listener: ThemeListener) => {
        listener(Appearance.getColorScheme() === 'dark' ? Themes.Dark : Themes.Light);
        
        Appearance.addChangeListener((theme) => listener(theme.colorScheme === 'dark' ? Themes.Dark : Themes.Light));
    });

    const navigationService = IoCContainer.instance.container.get(NavigationService);

    navigationService.initAppWithModules(appModules);
    navigationService.showSplash();
}