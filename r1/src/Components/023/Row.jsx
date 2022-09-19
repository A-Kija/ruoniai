import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Row({ t }) {

    const { types } = useContext(TreesProvider);

    return (
        <li className="tree-row">
            <span> {t.title} </span>
            <span> {types.find(tr => tr.id === t.type).type} </span>
            <i>{t.height}m</i>
            <button className="green">Edit</button>
            <button className="red">Delete</button>
        </li>
    );

}

export default Row;