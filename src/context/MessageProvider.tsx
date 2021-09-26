import { ReactChild , useReducer} from "react";
import { initialMessagesState, initialContextValue} from "../utils/constants";
import { MessagesReducer } from "../utils/grid";
import { MessageContext } from "./MessageContext";

const MessageProvider = (children: ReactChild | any) => {

    const [state, dispatch] = useReducer(MessagesReducer, initialMessagesState);

    return (
      <MessageContext.Provider value={state}>
        {children}
      </MessageContext.Provider>
    );
  };

  export { MessageProvider }