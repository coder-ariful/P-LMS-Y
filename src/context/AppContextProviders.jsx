import { AppContext } from "./AppContext"


export const AppContextProvider = ({ children }) => {
    const userInfo = {

    }
    return (
        <AppContext.Provider value={userInfo}>
            {children}
        </AppContext.Provider>
    )
}