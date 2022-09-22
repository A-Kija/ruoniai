import { useState, useEffect } from 'react';
import Suppliers from '../../Contexts/Suppliers';
import Create from '../es/Create';
import List from '../es/List';
import axios from 'axios';

function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [createData, setCreateData] = useState(null);
    const [suppliers, setSuppliers] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/server/suppliers')
        .then(res => {
            setSuppliers(res.data);
        })
    }, [lastUpdate]);

    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post('http://localhost:3003/server/suppliers', createData)
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [createData]);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        axios.delete('http://localhost:3003/server/suppliers/'+ deleteData.id)
        .then(res => {
            setLastUpdate(Date.now());
        });
    }, [deleteData]);


    return (
        <Suppliers.Provider value={{
            setCreateData,
            suppliers,
            setDeleteData
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create />
                    </div>
                    <div className="col-8">
                        <List />
                    </div>
                </div>
            </div>
        </Suppliers.Provider>
    )
}

export default Main;