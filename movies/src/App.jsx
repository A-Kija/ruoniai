import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import Edit from './Components/Edit';
import List from './Components/List';
import { create, destroy, read, update } from './Functions/localStorage';

const key = 'movies';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  // READ
  useEffect(() => {
    setMovies(read(key));
  }, [lastUpdate]);


  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now())
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now())
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);



  return (
    <DataContext.Provider value={{
      setCreateData,
      movies,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
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
      <Edit />
    </DataContext.Provider>
  );
}

export default App;