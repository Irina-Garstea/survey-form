import { createTheme} from "@mui/material/styles";
import { red } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: "#555596",
            contrastText: "#ffffff",
           
        },
        secondary: {
            main: "#3D91F3",
            contrastText: "#ffffff",  
        },
        error: {
            main: red.A400,
        },
    },
});






export default theme;