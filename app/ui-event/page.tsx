'use client';

import { useState } from 'react';

export default function Page() {
    const [x, setX] = useState(0); // define state

    // function to handle click
    const handleClick = () => {
        setX(x + 1); // x = x + 1
    }

    return <div>
        <button onClick={handleClick}>Click me</button>
        <p>X: {x}</p>
    </div>
}
