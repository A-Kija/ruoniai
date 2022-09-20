import { useEffect, useState } from 'react';
import axios from 'axios';

function RightJoin() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/get-it/right-join')
        .then(res => setClients(res.data));
    })

    return (
        <ul className="trees">
            <h2>RightJoin</h2>
        {
            clients.map(c => <li className="tree-row">
                <span>ID: {c.id} </span>
                <span>{c.name}</span>
                <span>ID: {c.pid} </span>
                <span>{c.phone}</span>
            </li>)
        }
        </ul>
    );
}

export default RightJoin;