import React from 'react';
// import UseEffectExample from '../hooks/UseEffectExample';
// import UseStateExample from '../hooks/UseStateExample';
import UseReducerExample from '../hooks/UseReducerExample';

// Hooks
const Hooks = () => {
    return (
        /*
        
        React Hooks are functions that let you "HOOK" into React Features.
        1. UseState 
        UseState is used to add State to react components.
        UseStae could be used for buttons, onclicks, onchange methods, etc
        
        */
        <div>
            {/* <UseStateExample /> */}
            {/* <UseEffectExample /> */}
            <UseReducerExample />
        </div>
    )
}


export default Hooks;