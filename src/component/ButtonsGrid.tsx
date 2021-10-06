import { useContext } from "react";
import Box from "@mui/material/Box";
import { MessageContext } from "../context/MessageContext";
import { ACTION } from "../utils/constants";
import { PannelButton } from "./UI/elements";

export interface IButtonsGridProps {
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
}
const ButtonsGrid = ({ setStop }:IButtonsGridProps): JSX.Element => {

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
          setStop(true);
        }}
      >
        STOP
      </PannelButton>
      <PannelButton
        onClick={() => {
          dispatch({ type: ACTION.CLEAR });
        }}
      >
        CLEAR
      </PannelButton>
    </Box>
  );
};

export { ButtonsGrid };
