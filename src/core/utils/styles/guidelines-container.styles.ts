import { action, makeObservable, observable } from 'mobx';
import { Theme, Themes, themes as allThemes } from './themes.styles';

export type ThemeListener = (theme: Themes) => void;

export class GuidelinesContainer {
    static instance: GuidelinesContainer = new GuidelinesContainer();

    @observable
    currentThemeName = Themes.System;

    @observable
    currentTheme: Theme = allThemes[Themes.Light];

    themes = allThemes

    private constructor() {
        makeObservable(this)
    }

    static initializeWithSystemThemeListener = (factory: (listener: ThemeListener) => void) => {
        factory((theme: Themes) => {
            GuidelinesContainer.instance.setTheme(theme);
        });
    }

    @action.bound
    setTheme(theme: Themes) {
        this.currentThemeName = theme;
        this.currentTheme = this.themes[theme];
    }
}