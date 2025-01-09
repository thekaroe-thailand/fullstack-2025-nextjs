'use client';

import axios from 'axios';

export default function Page() {
    const doPost = async () => {
        const payload = {
            id: 100,
            name: 'kob'
        };
        await axios.post('http://localhost:3001', payload);
    };
    const doGet = async () => {
        await axios.get('http://localhost:3001');
    };
    const doPut = async () => {
        const payload = {
            id: 100,
            name: 'kob'
        };
        await axios.put('http://localhost:3001', payload);
    };
    const doDelete = async () => {
        await axios.delete('http://localhost:3001');
    };
    return <div>
        <button onClick={doPost}>Post</button>
        <button onClick={doGet}>Get</button>
        <button onClick={doPut}>Put</button>
        <button onClick={doDelete}>Delete</button>
    </div>
}