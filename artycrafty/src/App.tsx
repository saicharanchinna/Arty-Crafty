import './App.css';

interface AppProps {
  setCurrentUser?: any;
  makeCheckLoginHTTPRequest?: any;
}

const App = (props: AppProps) => {
  return (
      // <LocalizationProvider dateAdapter={AdapterMoment}>
      // <CheckLoginComponent>
        <div className="app">
          {/*<ThemeProvider theme={theme}>*/}
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
