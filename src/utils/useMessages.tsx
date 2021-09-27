
import { useEffect, useContext } from "react";
import generateMessage, { Message } from "../Api";
import { uuid } from "../utils/grid";
import { MessageContext } from "../context/MessageContext";
import { ACTION } from "./constants";
import { IContextValue } from "../models/grid";

const UseMessages = (): IContextValue => {

    const { state, dispatch } = useContext(MessageContext);

      useEffect(() => {
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
    

    }, [state, dispatch]);
  
    return { state, dispatch };
  };

  export { UseMessages }