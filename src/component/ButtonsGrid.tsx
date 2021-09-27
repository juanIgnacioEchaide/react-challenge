import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PannelButton } from "./UI/elements";

const ButtonsGrid = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }} 
        style={{
            display:"flex",
            alignItems: "center", 
            justifyContent:"center"
            }}>
            <PannelButton>CLEAR</PannelButton>
            <PannelButton>STOP</PannelButton>
    </Box>
  );
};

export { ButtonsGrid };
