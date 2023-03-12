import './App.scss';
import {Component} from "react";
import Navigator from "./navigation/navigator";
import AlertComponent from "./shared/components/alert/alertComponent";
import AppVersionComponent from "./shared/components/app-version/appVersionComponent";
import CheckLoginComponent from "./shared/components/check-login/checkLoginComponent";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import {ColorConfig} from "./constants";

// import CheckLoginComponent from "./shared/components/check-login/checkLoginComponent";

interface AppProps {
}

interface AppState {
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: ColorConfig.primary,
        },
        text: {
            primary: ColorConfig.textLight,
        },
        background: {
            default: ColorConfig.backgroundColor,
        },
        info: {
            main: ColorConfig.info,
            contrastText: '#FFF'
        },
        secondary: {
            main: ColorConfig.secondary,
            contrastText: '#FFF'
        },
        error: {
            main: ColorConfig.error,
            contrastText: '#FFF'
        },
        success: {
            main: ColorConfig.success,
            contrastText: '#FFF'
        },
        warning: {
            main: ColorConfig.warning,
            contrastText: '#FFF'
        },
    },
    typography: {fontFamily: 'Lato'},
};
const theme = createTheme(themeOptions);

class App extends Component<AppProps, AppState> {

    render() {
        return (
            <CheckLoginComponent>
                <ThemeProvider theme={theme}>
                    <div className="app">
                        <Navigator/>
                        <AlertComponent/>
                        <AppVersionComponent/>
                    </div>
                </ThemeProvider>
            </CheckLoginComponent>
        );
    }
}

export default App;
