import { observer } from "mobx-react-lite";
import { PropsWithChildren, createContext } from "react";
import { GuidelinesContainer } from "../styles/guidelines-container.styles";

export const ThemeContext = createContext(GuidelinesContainer.instance);

export const ThemeProvider = observer((props: PropsWithChildren) => {
    return props.children;
});