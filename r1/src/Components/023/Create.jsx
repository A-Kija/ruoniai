import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Create() {

    const {types} = useContext(TreesProvider);

    return (
        <div className="create-form">
            <h2>New Tree</h2>
            <div>
                <span>Title: </span>
                <input type="text"></input>
            </div>
            <div>
                <span>Height: </span>
                <input type="text"></input>
            </div>
            <div>
                <span>Type: </span>
                <select>
                    {
                        types.map(t => <option key={t.id} value={t.id}>{t.type}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default Create;