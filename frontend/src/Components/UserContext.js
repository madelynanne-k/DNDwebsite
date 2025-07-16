import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? parseInt(savedUser) : null;
    });

    useEffect(() => {
        if (user !== null) {
            localStorage.setItem("user", user);
        }
    }, [user]);

    console.log("Current user: ", user)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => useContext(UserContext);