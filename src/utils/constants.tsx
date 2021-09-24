export enum COLOR {
    ERROR = "#F56236",
    WARNING = "#FCE788",
    INFO = "#88FCA3",
}

export enum TITLE {
    ERROR = " Error Type 1",
    WARNING = "Warning Type 2",
    INFO = "Info Type 3",
}

export enum ACTION {
    ADD_ERROR = "ADD_ERROR",
    ADD_WARNING = "ADD_WARNING",
    ADD_INFO = "ADD_INFO",
    DELETE_ERROR = "DELETE_ERROR",
    DELETE_WARNING = "DELETE_WARNING",
    DELETE_INFO = "DELETE_INFO",
}

export enum TYPE {
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
}

export const initialMessagesState = {
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
}