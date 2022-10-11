import { useState, useEffect } from 'react';
import Register from '../../Contexts/Register';
import Create from './Create';
import axios from 'axios';
import { authConfig } from '../../Functions/auth';

function Main() {

    const [createUser, setCreateUser] = useState(null);

    useEffect(() => {
        if (null === createUser) {
            return;
        }
        axios.post('http://localhost:3003/home/users', createUser, authConfig())
            .then(res => {
                // setLastUpdate(Date.now());
            });
    }, [createUser]);



    return (
        <Register.Provider value={{
            setCreateUser
        }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Create />
                    </div>
                </div>
            </div>
        </Register.Provider>
    )
}
export default Main;