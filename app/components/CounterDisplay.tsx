'use client';

import { useContext } from 'react';
import { DataContext } from '../share/page';

export default function CoutnerDisplay() {
    const { counter } = useContext(DataContext);

    return <h1>Current Counter: {counter}</h1>
}
