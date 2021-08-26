import React from 'react';

//function with lambda expression with jsx 
export const First = () => <h1> Hello react</h1>

//classic function with jsx
export function Second(){
    return (
        <div>
            <h1> Inside the second container using functions</h1>
        </div>
    )
}

//function without jsx
export function Third(){
    return (React.createElement('div',null,
        React.createElement('p',null,'This is my 1st statement in third function without jsx'),
        React.createElement('p',null,'This is my 2nd statement in third function without jsx'))
    )
}

export default First;
