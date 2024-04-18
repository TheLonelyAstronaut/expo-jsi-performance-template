import { Navigation } from "react-native-navigation";
import { AppModule, AppNavigationModule, ModalPresentationStyle, PresentationType } from "../../model/app-module.model";
import { fatalError } from "../fatal-error.utils";
import { injectable } from 'inversify';

enum Direction {
    Push,
    Pop
}

@injectable()
export class NavigationService {
    static readonly SPLASH_KEY = 'NavigationService::SPLASH_KEY';
    static readonly HOME_KEY = 'NavigationService::HOME_KEY';

    private splash: AppNavigationModule = null!;
    private home: AppNavigationModule = null!;
    private modules: Record<string, AppNavigationModule> = {};

    constructor() {
        Navigation.setDefaultOptions({
            animations: {
              setRoot: {
                waitForRender: true,
              },
              pop: {
                waitForRender: true
              },
              push: {
                waitForRender: true
              }
            },
            statusBar: {
                translucent: true,
                drawBehind: true,
                animate: true
            },
            popGesture: true
        });
    }

    initAppWithModules = (modules: Array<AppModule>) => {
        modules.filter(m => !!m.navigation).forEach((module) => {
            module.navigation.forEach((n, key) => {
                this.modules[n.key] = n;

                if (n.key === NavigationService.SPLASH_KEY) {
                    this.splash = module.navigation[key];
                } else if (n.key === NavigationService.HOME_KEY) {
                    this.home = module.navigation[key];
                }

                Navigation.registerComponent(n.key, () => n.root);
            });
        });
    }
    
    private _navigate = (componentId: string, module: Partial<AppNavigationModule>, direction?: Direction, params?: object) => {
        const component = !!module.root ? {
            component: {
                name: module.key,
                passProps: params,
                options: {
                    ...module.options,
                    
                }
            }
        } : null;

        switch(module.presentation) {
            case PresentationType.Modal: {
                if (direction === Direction.Pop) {
                    Navigation.dismissModal(componentId);
                } else {
                    Navigation.showModal(component);
                }
                break;
            }
            case PresentationType.Screen: {
                if (direction === Direction.Pop) {
                    Navigation.pop(componentId, params);
                } else {
                    Navigation.push(componentId, component);
                }
                break;
            }
            case PresentationType.Stack: {
                if (direction === Direction.Pop) {
                    Navigation.pop(componentId);
                } else {
                    Navigation.push(componentId, {
                        stack: {
                            children: [component]
                        }
                    });
                }
                break;
            }
            case PresentationType.Root: {
                Navigation.setRoot({
                    root: {
                        stack: {
                            children: [component]
                        }
                    }
                });
                break;
            }
            default: {
                fatalError(`Unknown PresentationType! ${module.presentation}`);
            }
        }
    }

    showSplash = () => {
        Navigation.events().registerAppLaunchedListener(() => {
            this._navigate('', this.splash);
        });
    }

    hideSplash = () => {
        this._navigate('', this.home);
    }

    navigate = (componentId: string, module: string, params?: object) => {
        this._navigate(componentId, this.modules[module], Direction.Push, params);
    }

    goBack = (componentId: string, params?: object) => {
        this._navigate(componentId, { presentation: PresentationType.Screen }, Direction.Push, params);
    }
}