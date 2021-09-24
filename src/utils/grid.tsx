import { IMessagesState, IAction, IMessageItem } from "../models/grid"
import { Message } from "../Api";
import { ACTION } from "../utils/constants";
import { Dispatch } from "react";

export const MessagesReducer = (prevState: IMessagesState, action: IAction) => {
    switch(action.type){
        case ACTION.ADD_ERROR : return {
            ...prevState,
            errors:{
                ...prevState.errors,
                count: prevState.errors.count += 1,
                messages: [ ...prevState.errors.messages, action.payload]
            }
        };
        case ACTION.ADD_WARNING : return {
            ...prevState,
            errors:{
                ...prevState.warnings,
                count: prevState.warnings.count += 1,
                messages: [ ...prevState.warnings.messages, action.payload]
            }
        };
        case ACTION.ADD_INFO : return {
            ...prevState,
            info:{
                ...prevState.info,
                count: prevState.info.count += 1,
                messages: [ ...prevState.info.messages, action.payload]
            }
        };
        case ACTION.DELETE_ERROR : return {
            ...prevState,
            errors:{
                ...prevState.errors,
                count: prevState.errors.count - 1,
                messages: [ ...prevState.errors.messages.splice(
                    prevState.errors.messages.indexOf(action.payload)
                    )]
            }
        };
        case ACTION.DELETE_WARNING : return {
            ...prevState,
            warnings:{
                ...prevState.errors,
                count: prevState.errors.count - 1,
                messages: [ ...prevState.warnings.messages.splice(
                    prevState.errors.messages.indexOf(action.payload)
                    )]
            }
        };
        case ACTION.DELETE_INFO : return {
            ...prevState,
            info:{
                ...prevState.errors,
                count: prevState.errors.count - 1,
                messages: [ ...prevState.info.messages.splice(
                    prevState.errors.messages.indexOf(action.payload)
                    )]
            }
        };
        default: return prevState;
    }
}

export const uuid = ():string => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
}