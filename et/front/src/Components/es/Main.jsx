import { useState, useEffect } from 'react';
import Suppliers from '../../Contexts/Suppliers';
import Create from '../es/Create';
import axios from 'axios';

function Main() {

    const [createData, setCreateData] = useState(null);
    const [suppliers, setSuppliers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/server/suppliers')
        .then(res => {
            setSuppliers(res.data);
        })
    }, []);

    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post('http://localhost:3003/server/suppliers', createData)
        .then(res => {

        });
    }, [createData]);


    return (
        <Suppliers.Provider value={{
            setCreateData,
            suppliers
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create />
                    </div>
                    <div className="col-8">

                    </div>
                </div>
            </div>
        </Suppliers.Provider>
    )
}

export default Main;