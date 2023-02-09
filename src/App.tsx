import './App.scss';
import {Component} from "react";
import Navigator from "./navigation/navigator";
import AlertComponent from "./shared/components/alert/alertComponent";
import AppVersionComponent from "./shared/components/app-version/appVersionComponent";
import CheckLoginComponent from "./shared/components/check-login/checkLoginComponent";

// import CheckLoginComponent from "./shared/components/check-login/checkLoginComponent";

interface AppProps {
}

interface AppState {
}

class App extends Component<AppProps, AppState> {

    render() {
        return (
            <CheckLoginComponent>
                <div className="app">
                    <Navigator/>
                    <AlertComponent/>
                    <AppVersionComponent/>
                </div>
            </CheckLoginComponent>
        );
    }
}

export default App;
