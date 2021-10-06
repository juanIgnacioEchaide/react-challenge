import { IMessagesState, IAction } from "../models/grid";
import { ACTION, TITLE, COLOR } from "../utils/constants";
import { Message } from "../Api";
import { Dispatch } from "react-transition-group/node_modules/@types/react";

export const MessagesReducer = (prevState: IMessagesState, action: IAction) => {
  switch (action.type) {
    case ACTION.ADD_ERROR:
      return {
        ...prevState,
        errors: {
          ...prevState.errors,
          count: (prevState.errors.count += 1),
          messages: [...prevState.errors.messages, action.payload],
        },
      };
    case ACTION.ADD_WARNING:
      return {
        ...prevState,
        warnings: {
          ...prevState.warnings,
          count: (prevState.warnings.count += 1),
          messages: [...prevState.warnings.messages, action.payload],
        },
      };
    case ACTION.ADD_INFO:
      return {
        ...prevState,
        info: {
          ...prevState.info,
          count: (prevState.info.count += 1),
          messages: [...prevState.info.messages, action.payload],
        },
      };
    case ACTION.DELETE_ERROR:
      return {
        ...prevState,
        errors: {
          ...prevState.errors,
          count: prevState.errors.count - 1,
          messages: [
            ...prevState.errors.messages.filter((m) => m.id !== action.payload),
          ],
        },
      };
    case ACTION.DELETE_WARNING:
      return {
        ...prevState,
        warnings: {
          ...prevState.warnings,
          count: prevState.warnings.count - 1,
          messages: [
            ...prevState.warnings.messages.filter(
              (m) => m.id !== action.payload
            ),
          ],
        },
      };
    case ACTION.CLEAR:
      return {
        errors: {
            title: TITLE.ERROR,
            color: COLOR.ERROR,
            count: 0,
            messages: [],
        },
        warnings: {
            title: TITLE.WARNING,
            color: COLOR.WARNING,
            count: 0,
            messages: [],
        },
        info: {
            title: TITLE.INFO,
            color: COLOR.INFO,
            count: 0,
            messages: [],
        }
      };
    case ACTION.STOP:
      return {
        ...prevState,
        stop: true
      };
    default:
      return prevState;
  }
};

export const uuid = (): string => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

export const dispatchMessages = (
  message: Message,
  dispatch: Dispatch<IAction>
) => {
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
};
