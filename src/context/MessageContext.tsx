import { createContext } from "react";
import { initialMessagesState  } from "../utils/constants";

const MessageContext = createContext(initialMessagesState);

export { MessageContext };
