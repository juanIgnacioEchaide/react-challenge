import { Dispatch } from "react";
import {
  ColumnContainer,
  ColumnHeader,
  ColumnCount,
  MessagesContainer,
} from "../component/UI/elements";
import { MessagesList } from "../component/MessageList";
import { IAction, IMessageItem } from "../models/grid";
import { COLOR, TYPE } from "../utils/constants";

export interface IColumnProps {
  title: string;
  count: number;
  messages: IMessageItem[];
  type: TYPE;
  color: COLOR;
  dispatch: Dispatch<IAction>;
}

const Column = ({ 
  title, 
  count, 
  messages,
  type, 
  color, 
  dispatch }: IColumnProps): JSX.Element => {

  return (
    <ColumnContainer>
        <div style={{margin:"0", padding:"0"}}>
            <ColumnHeader>{title}</ColumnHeader>
            <ColumnCount>Count {count}</ColumnCount>
        </div>
        <MessagesContainer>
            <MessagesList 
              messages={messages} 
              color={color}
              />
        </MessagesContainer>
    </ColumnContainer>
  );
};

export { Column };
