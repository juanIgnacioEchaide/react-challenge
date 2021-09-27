import { Button } from "@mui/material";
import styled from "styled-components";

const ColumnContainer = styled.div`
    height: 100%;
`;

const ColumnHeader = styled.h3`
    color: black;
    font-weight: 2000px;
    font-size: 20px;
`;

const ColumnCount = styled.p`
    padding-top: none;
    font-size: 14px;
    color: black;
`;

const MessagesContainer = styled.div`
`;  

const PannelButton = styled(Button)`
    background: #88FCA3;
    border-radius: 10px;
    box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
`

const MessageCard = styled.div`
    background: ${({color})=> color};
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;
const MessageText = styled.div`
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;  
`;
const ClearButton = styled.p`
    display: flex;
    justify-content: flex-end;
    padding-right: 7px;
`;

export {
    ColumnContainer,
    ColumnHeader,
    ColumnCount,
    MessagesContainer,
    MessageCard,
    MessageText,
    ClearButton,
    PannelButton,
 }