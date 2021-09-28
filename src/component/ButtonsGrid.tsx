import { useContext } from "react";
import Box from "@mui/material/Box";
import { MessageContext } from "../context/MessageContext";
import { ACTION } from "../utils/constants";
import { PannelButton } from "./UI/elements";

const ButtonsGrid = (): JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(MessageContext);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PannelButton
        onClick={() => {
          console.log(state)
          dispatch({ type: ACTION.STOP });
        }}
      >
        STOP
      </PannelButton>
      <PannelButton
        onClick={() => {
          console.log(state)
          dispatch({ type: ACTION.CLEAR });
        }}
      >
        CLEAR
      </PannelButton>
    </Box>
  );
};

export { ButtonsGrid };
