
import { useEffect, useContext } from "react";
import generateMessage, { Message } from "../Api";
import { dispatchMessages } from "../utils/grid";
import { MessageContext } from "../context/MessageContext";
import { IContextValue } from "../models/grid";

const UseMessages = (): IContextValue => {

  const { state, dispatch } = useContext(MessageContext);

      useEffect(() => {
        generateMessage((message: Message) => {
          if(state.stop){
            return
          }
          dispatchMessages(message,dispatch);
        });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
  
    return { state, dispatch };
  };

  export { UseMessages }