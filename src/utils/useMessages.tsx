
import { useReducer, useEffect } from "react";
import generateMessage, { Message } from "../Api";
import { uuid } from "../utils/grid";

const UseMessages = (): JSX.Element => {

    const context = useContext(contextValue)
  
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
  
    return { state };
  };

  export { UseMessages }