import { ReactChild, ReactFragment, ReactPortal, useReducer } from "react";
import { initialMessagesState, TYPE } from "../utils/constants";
import { MessagesReducer } from "../utils/grid";
import { MessageContext } from "./MessageContext";

const MessageProvider = (children: ReactChild) => {

    const [state, dispatch] = useReducer(MessagesReducer, initialMessagesState);

    return (
      <MessageContext.Provider value={state}>
        {children}
      </MessageContext.Provider>
    );
  };

  export { MessageProvider }