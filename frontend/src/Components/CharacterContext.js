import React, { createContext, useState, useContext, useEffect } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [ character, setCharacter ] = useState(() => {
        const savedCharacter = localStorage.getItem("character");
        return savedCharacter ? parseInt(savedCharacter) : null;
    });

    useEffect(() => {
        if (character !== null) {
            localStorage.setItem("character", character);
        }
    }, [character]);

    const clearCharacter = () => {
        setCharacter(null);
        localStorage.removeItem("character");
    }

    console.log("Current character: ", character)

    return (
        <CharacterContext.Provider value={{ character, setCharacter, clearCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};


export const useCharacter = () => useContext(CharacterContext);