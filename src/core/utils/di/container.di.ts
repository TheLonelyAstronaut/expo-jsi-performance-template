import { ContainerModule } from "inversify";
import { NavigationService } from "../services/navigation.service";

export const coreContainerModule = new ContainerModule((bind) => {
    // bind<ApiClient>(internalKeys.CoreApi)
    //   .toDynamicValue(config => new CoreApiClient(
    //     config.container.get(publicFeatureKeys.ConfigurationProvider)
    //   ))
    //   .inSingletonScope();

    // bind<KvStore>(internalKeys.CoreKvStore)
    //   .toDynamicValue(config => new CoreKvStore(
    //     config.container.get(publicFeatureKeys.ConfigurationProvider),
    //       config.container.get(publicFeatureKeys.KvNativeDriver)
    //   ))
    //   .inSingletonScope();

    // bind<Logger>(publicFeatureKeys.Logger).to(LoggerImpl).inSingletonScope();

    // bind(ViewModel).toSelf();
    bind(NavigationService).toSelf().inSingletonScope();
});