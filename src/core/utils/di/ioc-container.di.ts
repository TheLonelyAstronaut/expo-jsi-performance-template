import { Container } from "inversify";
import { AppModule } from "../../model/app-module.model";

export class IoCContainer {
    static instance = new IoCContainer();

    private _container: Container = null!;

    private constructor() {}

    get container() {
        return this._container;
    }

    static initializeWithModules = (modules: Array<AppModule>) => {
        const appContainer = new Container({
            skipBaseClassChecks: true
        });

        appContainer.load(...modules.map(m => m.di).filter(d => !!d));

        IoCContainer.instance._container = appContainer;

        return appContainer;
    }
}