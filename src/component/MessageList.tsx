import { Dispatch } from "react";
import {
  MessageCard,
  MessageText,
  ClearButton,
} from "../component/UI/elements";
import { IMessageItem, IAction } from "../models/grid";
import { ACTION, COLOR, TYPE } from "../utils/constants";

export interface IMessagesListProps {
  type: TYPE;
  messages: IMessageItem[];
  color: COLOR;
  dispatch: Dispatch<IAction>;
}

const MessagesList = ({ type, messages, color, dispatch }: IMessagesListProps): JSX.Element => {

  const onDispatch = (id: string, type: TYPE) => {
    
        const ActionByType = {
          "ERROR" : ACTION.DELETE_ERROR,
          "WARNING" : ACTION.DELETE_WARNING,
          "INFO" : ACTION.DELETE_INFO,
        }

        return dispatch({
            type: ActionByType[type],
            payload: id,
        })
    };

  return (
    <div>
      {messages?.map((mssg: IMessageItem) => 
        <MessageCard key ={mssg.id} color={color}>
          <MessageText>{mssg.message}</MessageText>
          <ClearButton
            onClick={() => console.log("ClearButton")}
            >
                Clear
            </ClearButton>
        </MessageCard>
      )}
    </div>
  );
};

export { MessagesList };
