import {
  MessageCard,
  MessageText,
  ClearButton,
} from "../component/UI/elements";
import { IMessageItem } from "../models/grid";
import { COLOR } from "../utils/constants";

export interface IMessagesListProps {
  messages: IMessageItem[];
  color: COLOR;
}

const MessagesList = ({ messages, color }: IMessagesListProps): JSX.Element => {

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
