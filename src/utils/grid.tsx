import { IMessagesState, IAction } from "../models/grid"
import { ACTION, initialMessagesState } from "../utils/constants";

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
            warnings:{
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
                messages: [...prevState.errors.messages.filter(m => m.id !== action.payload)]
            }
        };
        case ACTION.DELETE_WARNING : return {
            ...prevState,
            warnings:{
                ...prevState.warnings,
                count: prevState.warnings.count - 1,
                messages: [...prevState.warnings.messages.filter(m => m.id !== action.payload)]
            }
        };
        case ACTION.CLEAR : return {
            ...initialMessagesState
        };
        case ACTION.STOP : return {
            ...prevState,
            stop: !prevState.stop
        };
        default: return prevState;
    }
}

export const uuid = ():string => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
}