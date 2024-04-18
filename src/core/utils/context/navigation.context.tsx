import React, { PropsWithChildren } from "react";
import { useContext } from "react";

type NavigationContext = {
    componentId: string;
    params?: object;
}

const NavigationContext = React.createContext<NavigationContext>({
    componentId: ''
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({children, ...rest}: PropsWithChildren<NavigationContext>) => {
    return (
        <NavigationContext.Provider value={rest}>
            {children}
        </NavigationContext.Provider>
    );
};