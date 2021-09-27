import Box from "@mui/material/Box";
import { PannelButton } from "./UI/elements";

export interface IButtonsGridProps {
    pauseFunction: VoidFunction;
    clearFunction: VoidFunction;
}
const ButtonsGrid = ({pauseFunction, clearFunction }:IButtonsGridProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }} 
        style={{
            display:"flex",
            alignItems: "center", 
            justifyContent:"center"
            }}>
            <PannelButton onClick={clearFunction}>CLEAR</PannelButton>
            <PannelButton onClick={pauseFunction}>STOP</PannelButton>
    </Box>
  );
};

export { ButtonsGrid };
