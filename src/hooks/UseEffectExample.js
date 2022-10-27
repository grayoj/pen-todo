// import React, { useState, useEffect } from 'react';
// // UseEffect is a hook that allows you to add side effects to your
// // react app
// // Examples of When usEffect as a hook is usually employed
// /*
// 1. Fetch Data from apis using Axios
// 2. For timers/counters
// 3. Directly updating the DOM

// */

// // A Counter to track how many times our component gets rendered/re-rendered
// const UseEffectExample = () => {
//     const [count, setCount] = useState(0);

//     // useState hook to increment count based on render
//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1);
//         }, 1000)
//     });

//     return (
//         <div>I rendered {count} times</div>
//     )
// }

// export default UseEffectExample



// UseEffect Example II




import React, { useEffect, useState } from 'react';
import axios from 'axios';



function UseEffectExample() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
                console.log("API WAS CALLED");
            });
    }, []);

    return (
        <div>
            Hello
            <h1></h1>
            <h1></h1>
            <button>

            </button>
        </div>
    )
}

export default UseEffectExample;