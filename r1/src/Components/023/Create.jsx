import { useState } from "react";
import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Create() {

    const {types, setCreateData} = useContext(TreesProvider);
    const [title, setTitle] = useState('');
    const [height, setHeight] = useState('');
    const [type, setType] = useState(1);

    const create = () => {
        setCreateData({
            title,
            height: parseFloat(height),
            type: parseInt(type)
        });
        setTitle('');
        setHeight('');
        setType(1);
    }

    return (
        <div className="create-form">
            <h2>New Tree</h2>
            <div>
                <span>Title: </span>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div>
                <span>Height: </span>
                <input type="text" value={height} onChange={e => setHeight(e.target.value)}></input>
            </div>
            <div>
                <span>Type: </span>
                <select value={type} onChange={e => setType(e.target.value)}>
                    {
                        types.map(t => <option key={t.id} value={t.id}>{t.type}</option>)
                    }
                </select>
            </div>
            <button onClick={create}>Create New</button>
        </div>
    )
}

export default Create;