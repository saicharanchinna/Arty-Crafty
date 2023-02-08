import './App.css';
// import {ColorConfig} from './constants/ColorConfig';
import {createTheme, ThemeOptions, ThemeProvider} from '@mui/material/styles';
import Navigator from "./navigation/navigator";

interface AppProps {
  setCurrentUser?: any;
  makeCheckLoginHTTPRequest?: any;
}
// export const themeOptions: ThemeOptions = {
//     palette: {
//         mode: 'light',
//         primary: {
//             main: ColorConfig.primary,
//         },
//         text: {
//             primary: ColorConfig.textLight,
//         },
//         background: {
//             default: ColorConfig.backgroundColor,
//         },
//         info: {
//             main: ColorConfig.info,
//             contrastText: '#FFF'
//         },
//         secondary: {
//             main: ColorConfig.secondary,
//             contrastText: '#FFF'
//         },
//         error: {
//             main: ColorConfig.error,
//             contrastText: '#FFF'
//         },
//         success: {
//             main: ColorConfig.success,
//             contrastText: '#FFF'
//         },
//         warning: {
//             main: ColorConfig.warning,
//             contrastText: '#FFF'
//         },
//     },
//     typography: {fontFamily: 'Lato'},
// };
// const theme = createTheme(themeOptions);

const App = (props: AppProps) => {
  return (
      // <LocalizationProvider dateAdapter={AdapterMoment}>
      // <CheckLoginComponent>
        <div className="app">
          {/*<ThemeProvider>*/}
            <Navigator/>
            {/*<AlertComponent/>*/}
            {/*<ConfirmationComponent/>*/}
          {/*</ThemeProvider>*/}
        </div>
      // </CheckLoginComponent>
      // </LocalizationProvider>
  );
}

export default App;
