'use client'

import store from "@/store/store";
import { Provider } from "react-redux";

const ProviderCom = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default ProviderCom