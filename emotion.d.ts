import { Theme as MUITheme } from '@mui/material/styles/createTheme'

declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}