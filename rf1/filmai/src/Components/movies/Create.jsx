import { useState, useContext } from 'react';
import Movies from '../../Contexts/Movies';

function Create() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [cat, setCat] = useState(0);

    const { setCreateData, cats } = useContext(Movies);

    const add = () => {
        setCreateData({
            title,
            price: parseFloat(price),
            cat_id: parseInt(cat)
        });
        setTitle('');
        setPrice('');
        setCat(0);
    }

    return (
        <div className="card m-4">
            <h5 className="card-header">New Movie</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Movie title</label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Movie Price</label>
                    <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" value={cat} onChange={e => setCat(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            cats?.map(c => <option key={c.id} value={c.id}>{c.title}</option>)
                        }
                    </select>
                </div>
                <button onClick={add} type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;