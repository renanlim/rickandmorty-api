import { SetStateAction, createContext, useState } from "react";


export const AppContext = createContext<{
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>,
}>({
    loggedIn: false,
    setLoggedIn: function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
});

const Application = ({ children }: { children: React.ReactNode }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
                {children}
        </AppContext.Provider>
    );

};

export default Application;