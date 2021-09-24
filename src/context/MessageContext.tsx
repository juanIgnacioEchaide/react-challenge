import { createContext, useReducer, useEffect } from "react";
import generateMessage, { Message } from "../Api";
import { initialMessagesState, ACTION } from "../utils/constants";
import { MessagesReducer, uuid } from "../utils/grid";

const InitialMessageContext = () => {
  const [state, dispatch] = useReducer(MessagesReducer, initialMessagesState);

  useEffect(() => {
    const cleanUp = () => {
      generateMessage((message: Message) => {
        switch (message.priority) {
          case 0:
            dispatch({
              type: ACTION.ADD_ERROR,
              payload: {
                id: uuid(),
                message: message.message,
              },
            });
            break;
          case 1:
            dispatch({
              type: ACTION.ADD_WARNING,
              payload: {
                id: uuid(),
                message: message.message,
              },
            });
            break;
          case 2:
            dispatch({
              type: ACTION.ADD_INFO,
              payload: {
                id: uuid(),
                message: message.message,
              },
            });
            break;
        }
      });
    };

    return cleanUp;
  }, [state]);

  return state;
};

const MessageContext = createContext(InitialMessageContext);

export { MessageContext };
