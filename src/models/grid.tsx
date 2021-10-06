import { Dispatch } from "react";
import { TITLE, COLOR } from "../utils/constants";

export interface IMessageItem {
    id: string;
    message: string;
}

export interface IAction {
    type: string;
    payload?: IMessageItem | any;
}

export interface IMessagesState {
    errors: {
        title: TITLE;
        color: COLOR;
        count: number;
        messages: IMessageItem[];
    },
    warnings: {
        title: TITLE;
        color: COLOR;
        count: number;
        messages: IMessageItem[];
    },
    info: {
        title: TITLE;
        color: COLOR;
        count: number;
        messages: IMessageItem[];
    }
}

export interface IContextValue{
    state: IMessagesState,
    dispatch: Dispatch<IAction>,
}
