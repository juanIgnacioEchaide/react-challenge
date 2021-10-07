import React, { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import generateMessage, { Message } from "../Api";
import { dispatchMessages } from "../utils/grid";
import { MessageContext } from "../context/MessageContext";
import { Column } from "../component/Column"; 
import { TYPE } from "../utils/constants";

export interface IColumnsGridProps {
  stop: boolean;
}
const ColumnsGrid = ({ stop }:IColumnsGridProps): JSX.Element => {  

  const { state, dispatch } = useContext(MessageContext);

  useEffect(() => {
      !stop &&
      generateMessage((message: Message) => {
        dispatchMessages(message,dispatch)
      })
  } ,[stop, dispatch])

  return (
    <Box sx={{ flexGrow: 0 }} >
      <Grid container spacing={2} 
        style={{
          display:"flex",
          alignItems:"flex-start",
          justifyContent:"center"
          }}>
        <Grid item md={3}>
          <Column 
            type={TYPE.ERROR}
            title={state.errors.title} 
            count={state.errors.count} 
            color={state.errors.color} 
            messages={state.errors.messages}
            dispatch={dispatch}
          />
        </Grid>
        <Grid item md={3}>
          <Column 
              type={TYPE.WARNING}
              title={state.warnings.title} 
              count={state.warnings.count} 
              color={state.warnings.color} 
              messages={state.warnings.messages}
              dispatch={dispatch}
            />
        </Grid>
        <Grid item md={3}>
          <Column 
              type={TYPE.INFO}
              title={state.info.title} 
              count={state.info.count} 
              color={state.info.color} 
              messages={state.info.messages}
              dispatch={dispatch}
            />
        </Grid>
      </Grid>
    </Box>
  );
};

export { ColumnsGrid };
