import React, {createContext, useContext, useReducer } from 'react';

// Prepare the data layer




export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = { useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
);

// custom Hook to pull info from data layer
export const useStateValue = () => useContext(StateContext);
