import { IoCContainer } from "../di/ioc-container.di"

export const useIoCContainer = () => {
    return IoCContainer.instance.container;
}