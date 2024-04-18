import { PropsWithChildren } from "react";
import { useIoCContainer } from "../hooks/use-ioc-container.utils"
import { Provider } from "inversify-react";

export const DIProvider = (props: PropsWithChildren) => {
    const container = useIoCContainer();

    return (
        <Provider container={container}>
            {props.children}
        </Provider>
    )
}