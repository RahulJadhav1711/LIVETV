import React from "react";
import AppNav from "../navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, configStore } from "../redux/store/ReduxStore";

const App = () => {
    return (
        <Provider store={configStore}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNav />
            </PersistGate>
        </Provider>
    );
};

export default App;
