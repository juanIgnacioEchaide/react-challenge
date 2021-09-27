import { createContext } from "react";
import { IContextValue } from "../models/grid";
import { initialContextValue } from "../utils/constants";

const MessageContext = createContext<IContextValue>(initialContextValue);

export { MessageContext };
