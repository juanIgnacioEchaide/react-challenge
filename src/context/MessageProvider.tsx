import { useReducer} from "react";
import { initialMessagesState } from "../utils/constants";
import { MessagesReducer } from "../utils/grid";
import { MessageContext } from "./MessageContext";

const MessageProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(MessagesReducer, initialMessagesState);
    const value = { state, dispatch }
    
    return (
      <MessageContext.Provider value={value}>
        {children}
      </MessageContext.Provider>
    );
  };

  export { MessageProvider }