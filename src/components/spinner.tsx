import { FC } from "react";
import { Overlay } from "../styles";

export const Spinner: FC = ({ children }) => <Overlay>
    {children}
</Overlay>;