import React from 'react';
// import axios from 'axios';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';

const AllContext = React.createContext();

const MyContext = props =>{
    const initialState = {
        classNames: {
            generalStyles: 'bg-white text-black',
        }
    }

    const [s, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch, s);

    return (
        <AllContext.Provider
            value={{
                s, f,
            }}>
            {props.children}
        </AllContext.Provider>
    );
}


export { MyContext, AllContext };
