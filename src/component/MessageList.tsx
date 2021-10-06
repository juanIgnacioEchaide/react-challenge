import { useContext } from "react";
import {
  MessageCard,
  MessageText,
  ClearButton,
} from "../component/UI/elements";
import { IMessageItem } from "../models/grid";
import { MessageContext } from "../context/MessageContext";
import { ACTION, COLOR, TYPE } from "../utils/constants";

export interface IMessagesListProps {
  messages: IMessageItem[];
  color: COLOR;
  type: TYPE;
}

const MessagesList = ({ messages, color, type }: IMessagesListProps): JSX.Element => {

  const { dispatch } = useContext(MessageContext);

  const handleDelete = (id: string) => {
    console.log(type, id)
     switch(type){
      case TYPE.ERROR : return dispatch({type: ACTION.DELETE_ERROR, payload: id});
      case TYPE.WARNING : return dispatch({type: ACTION.DELETE_WARNING, payload: id});
      case TYPE.INFO : return dispatch({type: ACTION.DELETE_INFO, payload: id});
      default: 
    }
  }

  return (
    <div>
      {messages?.map((mssg: IMessageItem) => 
        <MessageCard key ={mssg.id} color={color}>
          
          <MessageText>{mssg.message}</MessageText>
          <div style={{display: "flex", paddingTop: "10px", justifyContent:"right"}}>
            <ClearButton
              onClick={() => handleDelete(mssg.id)}
              >
                Clear
              </ClearButton>
            </div>
        </MessageCard>
      )}
    </div>
  );
};

export { MessagesList };
