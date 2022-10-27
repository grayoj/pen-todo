// /*

// The reducer function contains your custom state logic
// amd the initial state, can be a simple value but
// will contain an object.

// the useReducer hook contains the current state which is returned
// and dispatch method

// Import
import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "toggleShowText":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" });
                }}
            >
                Click Here
            </button>

            {state.showText && <p>This is a text</p>}
        </div>
    );
};

export default UseReducerExample;

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     if (action.type === 'incremented_age') {
//         return {
//             age: state.age + 1
//         };
//     }
//     throw Error('Unknown action.');
// }

// export default function Counter() {
//     const [state, dispatch] = useReducer(reducer, { age: 42 });

//     return (
//         <>
//             <button onClick={() => {
//                 dispatch({ type: 'incremented_age' })
//             }}>
//                 Increment age
//             </button>
//             <p>Hello! You are {state.age}.</p>
//         </>
//     );
// }


// import React, { useReducer } from 'react'

// // Define initial state
// const initialState = 0;


// const reducer = (state, action) => {
//     switch (action) {
//         case "ADD":
//             return state + 1;
//         case "SUBTRACT":
//             return state - 1
//         case "RESET":
//             return 0;
//         default:
//             throw new Error("Unexpected action");
//     }
// };


// const UseReducerExample = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={() => dispatch("ADD")}>Add Number</button>
//             <button onClick={() => dispatch("SUBTRACT")}>Subtract Number</button>
//             <button onClick={() => dispatch("RESET")}>Reset Number</button>
//         </div>

//     )
// }

// export default UseReducerExample;