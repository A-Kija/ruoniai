import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import List from './Components/List';
import { create, destroy, read } from './Functions/localStorage';

const key = 'movies';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

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



  return (
    <DataContext.Provider value={{
      setCreateData,
      movies,
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
    </DataContext.Provider>
  );
}

export default App;