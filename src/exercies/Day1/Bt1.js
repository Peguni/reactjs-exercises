import React from 'react';

function Greeting(props) {
    return <h1>Name: {props.name}, Age: {props.age} </h1>
}

export default function App() {
    return (
        <div>
            <Greeting name="Thai" age="21" />
            <Greeting name="Binh" age="18" />
        </div>
    )
}